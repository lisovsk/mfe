const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[contenthash].js'
	},
	resolve: {
		extensions: ['.js', '.vue']
	},
	module: {
		rules: [
			{
				test: /\.(ico|jpe?g|png|gif|webp|svg|mp4|webm|wav|mp3|m4a|aac|oga|eot|woff|ttf)(\?.*)?$/,
				loader: "file-loader"
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.scss|\.css$/,
				use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime']
					}
				}
			}
		]
	},
	plugins: [new VueLoaderPlugin()]
};