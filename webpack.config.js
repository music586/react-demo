const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    },
   module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               exclude: /(node_modules|bower_components)/,
               use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['env','es2015', 'react'],
                   }
               }
           }
       ]
   },
   plugins : [
       new HtmlWebpackPlugin({
           title: 'index',
           template: './src/template/index.html'
       }),
       new webpack.HotModuleReplacementPlugin()
   ]
}
