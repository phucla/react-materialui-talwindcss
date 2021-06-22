/* eslint-disable import/no-extraneous-dependencies */
const { PurgeCSS } = require('purgecss')
const fs = require('fs')
const path = require('path')

const purge = async () => {
  const result = await new PurgeCSS().purge({
    content: ['./build/index.html', './build/static/js/*.js'],
    css: ['./build/static/css/*.css'],
    fontFace: true,
    rejected: true,
    variables: true,
  })

  result.forEach((out) => {
    console.log(out.rejected)
    fs.writeFileSync(path.resolve(__dirname, out.file), out.css, 'utf-8')
  })
}

purge()

console.log('Successfully purged.')
