var etp=require("extract-text-webpack-plugin");
var htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
	plugins:[new htmlWebpackPlugin({
		template:"./index.html"
	}),new etp("[name]-bundle.css")],
	entry:{
		main:"./main.js"
		},
	output:{
//		path:"./build/",
		filename:"[name]-bundle.js"
	},
	module:{
		loaders:[
		{
			test:/\.(css|less)$/,
			loader:etp.extract("css!less")
		},
//		{
//			test:/\.css$/,
//			loader:etp.extract("css")	
//		},
//		{
//			test:/\.less$/,
//			loader:"style!css!less?sourceMap"	
//		},
		{
			test:/.(png|gif|jpg)/,
			loader:"file-loader?name=images/[name].[ext]"
		},
		{
			test:/\.html$/,
			loader:"html"
		}
		]
	},
	resolve:{
		extensions:["",".js",".css",".less"]//可以省略后缀
//		alias:{
//			my:"./math_.js",
//			myStyle:"./build/style.css"
//		}
	}
}
