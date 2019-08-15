const VueLoaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	mode: 'development',
	devServer: {
		contentBase: 'dist', // files served
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},{
				test: /\.sass$/,
				use: ['vue-style-loader', 'css-loader', {
					loader: 'sass-loader',
					options: {
						indentedSyntax: true
					}
				}]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './src/page/index.html'
		})
	]
};
