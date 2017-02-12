"use strict";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		path.join(__dirname, 'src/index.js')
	],
	output: {
		publicPath: '/',
	    path: path.join(__dirname, '/build'),
	    filename: 'bundle.js'
	},
	// Added for flexbox react module
	resolve: {
    extensions: ['.jsx', '.scss', '.js', '.json'],
    modules: [
      "node_modules"
    ]
  },
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [{
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1,
                minimize: true,
                localIdentName: '[name]_[local]_[hash:base64:5]',
                sourceMap: true,
              }},
            'postcss-loader',
            {
              loader: 'sass-loader',
              query: { sourceMap: true},
            }],
        }),
      },
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "file"
			},
			{
				test: /\.(woff|woff2)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url?prefix=font/&limit=5000"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			},
			{
				test: /\.gif/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/gif"
			},
			{
				test: /\.jpg/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/jpg"
			},
			{
				test: /\.jpeg/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/jpeg"
			},
			{
				test: /\.png/,
				exclude: /(node_modules|bower_components)/,
				loader: "url-loader?limit=10000&mimetype=image/png"
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
		new webpack.HotModuleReplacementPlugin(), // Hot reload on the go
	  new webpack.NoEmitOnErrorsPlugin(),
		new webpack.LoaderOptionsPlugin({
	    options: {
	      context: __dirname,
	      postcss: [
	        autoprefixer
	      ]
	    }
	  })
	]

}
