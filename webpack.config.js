const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path:  path.resolve(__dirname,'dist/'),
    filename: 'builder.js'
  }, 
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.stylus$/,
        use: ['style-loader','css-loader','stylus-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.eot$|\.svg$|\.ttf$|\.woff$|\.woff2$/,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  }
}