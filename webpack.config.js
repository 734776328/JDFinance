var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path:  path.resolve(__dirname,'dist/'),
    filename: 'builder.js'
  }, 
  module: {

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'index.html'),
      filename: 'index.html'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  }
}