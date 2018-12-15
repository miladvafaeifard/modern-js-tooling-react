const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entry = path.resolve(__dirname, '../src/app/index.js')
const outputPath = path.resolve(__dirname, '../dist')
const template = path.resolve(__dirname, '../src/index.html')
const IGNORE_NODE_MODULES = /node_modules/

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
				exclude: IGNORE_NODE_MODULES,
				options: {
					presets: [
						[
                            '@babel/preset-env', {
                                targets: [
                                    'last 2 versions',
                                    'not dead',
                                    'not < 2%',
                                    'not ie 11', // take out if we need to support IE 11
                                ],
                                useBuiltIns: 'entry'
                            }
                        ],
						'@babel/preset-react'
					],
					plugins: [
						'react-hot-loader/babel',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-syntax-dynamic-import'
					]
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: IGNORE_NODE_MODULES,
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template
	})]
}
