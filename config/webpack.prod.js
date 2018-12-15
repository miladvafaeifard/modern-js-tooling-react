const webpackMerge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.base')

const config = {
    mode: 'production',
    plugins: [new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'bundle_sizes.html'
    })],
    externals: {
        'react': 'React',
        'react-dom' : 'ReactDOM'
    }
}

module.exports = webpackMerge(baseConfig, config)