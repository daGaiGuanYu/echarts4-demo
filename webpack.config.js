const VueLoaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const path=require('path');

const target = 'docs';
module.exports={
	mode: 'production',
	devServer: {
		contentBase: target, // files served
	},
	output: {
    filename: 'main.js',
    path: path.resolve(__dirname, target)
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
