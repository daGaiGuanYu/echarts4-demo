const VueLoaderPlugin=require('vue-loader/lib/plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	mode: 'development',
	devServer: {
		contentBase: 'dist', // files served
		host: '0.0.0.0', // 允许非本机访问
		port: 8888
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
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
