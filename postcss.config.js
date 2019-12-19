// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

module.exports = {
  plugins: [
    require('postcss-for'),
    require('tailwindcss'),
    require('postcss-import'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './layouts/**/*.html',
        './content/**/*.html',
      ],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html'],
        },
      ],
    }),
    require('autoprefixer')
  ]
}
