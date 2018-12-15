const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = path.resolve(__dirname, '../src/index.js')
const outputPath = path.resolve(__dirname, '../dist')
const template = path.resolve(__dirname, '../src/index.html')

module.exports = {
    entry,
    output: {
        path: outputPath,
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template
    })]
}