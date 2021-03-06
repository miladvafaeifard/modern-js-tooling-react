const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputPath = path.resolve(__dirname, '../dist')
const config = require('./config.json')
const IGNORE_NODE_MODULES = /node_modules/

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: ['@babel/polyfill', 'react-hot-loader/patch', './app/index.js'],
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, '../src/app')],
        exclude: [/node_modules/, /\.spec.(js|jsx)$/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: IGNORE_NODE_MODULES
      },
      {
        test: /\.(spec\.(jsx|js))$/,
        loader: 'ignore-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      config: JSON.stringify(config)
    }),
    new HtmlWebpackPlugin({
      title: config.title,
      chunksSortMode: 'dependency',
      template: path.resolve(__dirname, '../src/index.html')
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
}
