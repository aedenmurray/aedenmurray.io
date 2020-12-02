const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  module: {
   rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader' ]
       },
    ]
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3030,
    open: true
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
};