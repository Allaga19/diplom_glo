const path = require('path');
module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'dev-bundle.js',
		path: path.resolve(__dirname, './dist'),
		// publicPath: '/dist'
	},
	mode: 'development',
	devServer: {
		open: true,
		port: 3080,
		hot: true,
		// overlay: true,
		writeToDisk: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					},
				},
				exclude: /node_modules/,
			}
		]
	}
};
