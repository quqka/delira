// const withCSS = require('@zeit/next-css')
// import withCss from '@zeit/next-css'
// import withSass from 'node-sass'
// // const withSass = require('@zeit/next-sass')
// module.exports = () => withSass(withCss())
// const path = require('path')
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }

const withImages = require('next-images')
module.exports = withImages({
  webpack (config, options) {
    return config
  }
})
