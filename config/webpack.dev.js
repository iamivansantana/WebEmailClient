const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

/**@type {import('webpack').Configuration}*/
const devConfig = {
	mode: 'development',
	devServer: {
		static: path.join(__dirname, 'dist'),
		port: 3000,
		open: true,
		hot: true,
		// port: 3000,
		// static: '../dist',
		// open: '/',
	},
	// target:'web',
	plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /\.(css|sass|scss)$/,
			},
		],
	},
};

module.exports = merge(common, devConfig);
