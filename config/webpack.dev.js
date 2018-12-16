const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 9085
  }
}

module.exports = webpackMerge(baseConfig, config)
