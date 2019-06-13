module.exports = {
  pages: {
    index: {
      entry: 'src/js/app.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: { extract: false },
  productionSourceMap: false
}
