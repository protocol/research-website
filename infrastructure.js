/* eslint-disable ember/use-ember-get-and-set */
const aws = require('@pulumi/aws');
const pulumi = require('@pulumi/pulumi');
const awsConfig = new pulumi.Config('aws');
const tenMinutes = 60 * 10;

const DOMAIN_NAME = '122111222.com';

let fullDomain = `${pulumi.getStack()}.${DOMAIN_NAME}`;

let isProduction = pulumi.getStack() === 'production';

const contentBucket = new aws.s3.Bucket('contentBucket',
  {
    bucket: fullDomain,
    region: awsConfig.get('region'),
    acl: 'public-read',
    protected: isProduction,
    forceDestroy: !isProduction,
    website: {
      indexDocument: 'index.html',
      errorDocument: '404.html',
    },
  });

const logsBucket = new aws.s3.Bucket('requestLogs',
  {
    bucket: `${fullDomain}-logs`,
    region: awsConfig.get('region'),
    protected: isProduction,
    forceDestroy: !isProduction,
    acl: 'private',
  });

const provider = new aws.Provider('east',
  {
    profile: aws.config.profile,
    region: awsConfig.get('region'),
  });

const certificate = new aws.acm.Certificate('certificate',
  {
    domainName: fullDomain,
    validationMethod: 'DNS',
  },
  {
    provider,
  });

const hostedZoneId = aws.route53.getZone({ name: parseDomain(fullDomain).parentDomain }).id;

/**
 *  Create a DNS record to prove that we _own_ the domain we're requesting a certificate for.
 *  See https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html for more info.
 */
const certificateValidationDomain = new aws.route53.Record(`${fullDomain}-validation`, {
  name: certificate.domainValidationOptions[0].resourceRecordName,
  zoneId: hostedZoneId,
  type: certificate.domainValidationOptions[0].resourceRecordType,
  records: [certificate.domainValidationOptions[0].resourceRecordValue],
  ttl: tenMinutes,
});

/**
 * This is a _special_ resource that waits for ACM to complete validation via the DNS record
 * checking for a status of 'ISSUED' on the certificate itself. No actual resources are
 * created (or updated or deleted).
 *
 * See https://www.terraform.io/docs/providers/aws/r/acm_certificate_validation.html for slightly more detail
 * and https://github.com/terraform-providers/terraform-provider-aws/blob/master/aws/resource_aws_acm_certificate_validation.go
 * for the actual implementation.
 */
const certificateValidation = new aws.acm.CertificateValidation('certificateValidation', {
  certificateArn: certificate.arn,
  validationRecordFqdns: [certificateValidationDomain.fqdn],
}, { provider });

const basicAuthHandlerRole = new aws.iam.Role('basicAuthHandlerRole', {
   assumeRolePolicy: {
      Version: '2012-10-17',
      Statement: [{
         Action: 'sts:AssumeRole',
         Effect: 'Allow',
         Sid: '',
         Principal: {
            Service: [
              'edgelambda.amazonaws.com',
              'lambda.amazonaws.com',
            ],
         },
      }],
   },
});

new aws.iam.RolePolicyAttachment('attachHttpAuthPolicyAndRole', {
   role: basicAuthHandlerRole,
   policyArn: aws.iam.AWSLambdaFullAccess,
});

let httpBasicAuthLambda = new aws.lambda.CallbackFunction('http-basic-auth-published', {
  description: 'Ensure http-basic auth on publicly accesible staging websites',
  role: basicAuthHandlerRole,
  publish: true,
  timeout: 3,
  callback(event, context, callback) {
    // Configure authentication
    let authUser = 'solid';
    let authPass = '2019';

    // Get request and request headers
    let { request } = event.Records[0].cf;
    let { headers } = request;

    // Construct the Basic Auth string
    let authString = `Basic ${new Buffer(`${authUser}:${authPass}`).toString('base64')}`;

    // Require Basic authentication
    if (typeof headers.authorization == 'undefined' || (headers.authorization[0].value !== authString)) {
        let body = 'Unauthorized';
        let response = {
            status: '401',
            statusDescription: 'Unauthorized',
            body,
            headers: {
                'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }],
            },
        };
        callback(null, response);
    }

    // Continue request processing if authentication passed
    callback(null, request);
  },
});

// distributionArgs configures the CloudFront distribution. Relevant documentation:
// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html
// https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution.html
const distributionArgs = {
  enabled: true,
  // Alternate aliases the CloudFront distribution can be reached at, in addition to https://xxxx.cloudfront.net.
  // Required if you want to access the distribution via config.targetDomain as well.
  aliases: [fullDomain],

  // We only specify one origin for this distribution, the S3 content bucket.
  origins: [
    {
      originId: contentBucket.arn,
      domainName: contentBucket.websiteEndpoint,
      customOriginConfig: {
        // Amazon S3 doesn't support HTTPS connections when using an S3 bucket configured as a website endpoint.
        // https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginProtocolPolicy
        originProtocolPolicy: 'http-only',
        httpPort: 80,
        httpsPort: 443,
        originSslProtocols: ['TLSv1.2'],
      },
    },
  ],

  defaultRootObject: 'index.html',

  // A CloudFront distribution can configure different cache behaviors based on the request path.
  // Here we just specify a single, default cache behavior which is just read-only requests to S3.
  defaultCacheBehavior: {
    targetOriginId: contentBucket.arn,

    viewerProtocolPolicy: 'redirect-to-https',
    allowedMethods: ['GET', 'HEAD', 'OPTIONS'],
    cachedMethods: ['GET', 'HEAD', 'OPTIONS'],

    forwardedValues: {
      cookies: { forward: 'none' },
      queryString: false,
    },

    minTtl: 0,
    defaultTtl: tenMinutes,
    maxTtl: tenMinutes,

    lambdaFunctionAssociations: [
      { eventType: 'viewer-request', includeBody: false, lambdaArn: httpBasicAuthLambda.qualifiedArn },
    ],
  },

  customErrorResponses: [
    { errorCode: 404, responseCode: 404, responsePagePath: "/404.html" },
  ],

  // 'All' is the most broad distribution, and also the most expensive.
  // '100' is the least broad, and also the least expensive.
  priceClass: 'PriceClass_100',

  restrictions: {
    geoRestriction: {
      restrictionType: 'none',
    },
  },

  viewerCertificate: {
    acmCertificateArn: certificateValidation.certificateArn,
    sslSupportMethod: 'sni-only',
  },

  loggingConfig: {
    bucket: logsBucket.bucketDomainName,
    includeCookies: false,
  },
};

const cloudfrontDistribution = new aws.cloudfront.Distribution('cdn', distributionArgs);

// const aRecord =
new aws.route53.Record(fullDomain,
  {
    name: parseDomain(fullDomain).subdomain,
    zoneId: hostedZoneId,
    type: 'A',
    aliases: [
      {
        name: cloudfrontDistribution.domainName,
        zoneId: cloudfrontDistribution.hostedZoneId,
        evaluateTargetHealth: true,
      },
    ],
  });

exports.contentBucketUri = pulumi.interpolate `s3://${contentBucket.bucket}`;
exports.contentBucketName = contentBucket.bucket;
exports.logsBucketUri = pulumi.interpolate `s3://${logsBucket.bucket}`;
exports.contentBucketWebsiteEndpoint = contentBucket.websiteEndpoint;
exports.cloudFrontDomain = cloudfrontDistribution.domainName;
exports.targetDomainEndpoint = `https://${fullDomain}/`;
exports.distributionId = cloudfrontDistribution.id;

// Split a domain name into its subdomain and parent domain names.
// e.g. 'www.example.com' => 'www', 'example.com'.
function parseDomain(domain) {
  let parts = domain.split('.');

  if (parts.length < 2) {
    throw new Error(`No TLD found on ${domain}`);
  }

  // No subdomain, e.g. awesome-website.com.
  if (parts.length === 2) {
    return { subdomain: '', parentDomain: domain };
  }

  let subdomain = parts[0];
  parts.shift();  // Drop first element.
  return {
    subdomain,
    // Trailing '.' to canonicalize domain.
    parentDomain: `${parts.join('.')}.`,
  };
}
