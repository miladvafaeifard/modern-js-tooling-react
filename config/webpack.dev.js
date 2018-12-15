const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
    mode: 'development'
}

module.exports = webpackMerge(baseConfig, config);