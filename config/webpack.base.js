const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const app = path.resolve(__dirname, '../src/app/index.js')
const outputPath = path.resolve(__dirname, '../dist')
// const template = path.resolve(__dirname, '../src/index.html')
const config = require('./config.json')
const IGNORE_NODE_MODULES = /node_modules/

module.exports = {
  entry: [
    // '@babel/polyfill',
    // 'react-hot-loader/patch',
    app
  ],
  output: {
    path: outputPath,
    filename: 'app.bundle.js'
  },
  resolve: {
    symlinks: true,
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: [path.resolve(__dirname, '../node_modules')],
    alias: {
      config: path.resolve(__dirname, './config.json'),
      app: path.resolve(__dirname, '../src/app'),
      container: path.resolve(__dirname, '../src/app/container'),
      lib: path.resolve(__dirname, '../src/app/lib'),
      reducer: path.resolve(__dirname, '../src/app/reducer'),
      component: path.resolve(__dirname, '../src/app/component'),
      style: path.resolve(__dirname, '../src/app/style')
    }
  },
  context: path.resolve(__dirname, 'src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: IGNORE_NODE_MODULES
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: IGNORE_NODE_MODULES
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      config: JSON.stringify(config)
    }),
    new HtmlWebpackPlugin({
      title: 'frontend dev',
      chunksSortMode: 'dependency',
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
}
