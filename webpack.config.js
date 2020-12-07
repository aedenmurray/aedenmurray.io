const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'file-loader',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        splitChunks: { chunks: 'all' },
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 3030,
        open: true,
        hot: true,
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/favicon.ico' },
                { from: './src/favicon-32x32.png' },
                { from: './src/favicon-16x16.png' },
                { from: './src/apple-touch-icon.png' },
                { from: './src/android-chrome-512x512.png' },
                { from: './src/android-chrome-192x192.png' },
                { from: './src/site.webmanifest' },
            ],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    resolve: {
        fallback: {
            path: require.resolve('path-browserify'),
        },
    },
};
