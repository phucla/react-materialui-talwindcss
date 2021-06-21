/* eslint-disable import/no-extraneous-dependencies */
const { PurgeCSS } = require('purgecss')

const purge = async () => {
  const result = await new PurgeCSS().purge({
    content: ['./build/index.html', './build/static/js/*.js'],
    css: ['./build/static/css/*.css'],
    fontFace: true,
    rejected: true,
    variables: true,
  })
  console.log(result[0].rejected)
}

purge()

console.log('Successfully purged.')
