const path = require('path');
module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		// publicPath: '/dist'
	},
	mode: 'production',
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
