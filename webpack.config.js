const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
    entry: './src/index.js',
    output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'build.bundle.js'
     },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, loaders: ['style-loader', 'css-loader?minimize'] }
      ]
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        proxy: {
            "/scope/**": {
                target: 'http://10.249.72.83:8080'
            }
        }
    }
}