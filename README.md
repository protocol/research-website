# Protocol Research Labs Hugo Website

## Architecture

Static website built with the Hugo framework.
Uses tailwindcss for function css.
Thats it!

## Setup

- You will need [HUGO](https://gohugo.io/) installed
- You will need [YARN](https://yarnpkg.com/lang/en/).
- Run `yarn` to install deps.

## Development

- `yarn run serve`
- To use our CSS build chain (postcss + tailwindcss + autoprefixer + css treeshaking)
  you will need to have `postcss-cli` and `autoprefixer` installed globally.

## Provisioning

- Staging environments are provisioned on AWS with [Pulumi](https://www.pulumi.com/).
- The environments are protected with a username/password: solid/2019
  * You can modify this in the `infrastructure.js` files HTTPBasic Auth Lambda
- Contact SolidDigital to gain access to existing staging environments
- To deploy your own,
  * purchase domain from route 53
  * update the domain name in the top of the `infrastructure.js` file.
  * install and sign into the AWS CLI
  * install and sign into a Pulumi Account (free one)
  * run `pulumi up --stack=staging`

## Deploying

- Use `yarn run deploy:<environment>`
  * You will need to be signed into the AWS CLI
  * You might need to update the S3 bucket url and cloudfront distribution id's in the hugo config to match the selected environments bucket.
