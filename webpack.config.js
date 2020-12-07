const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

const HtmlWebpackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin({
    patterns: [
        { from: './src/site.webmanifest' },
        { from: './src/assets/favicons/favicon.ico', to: 'assets/favicons' },
        {
            from: './src/assets/favicons/favicon-32x32.png',
            to: 'assets/favicons',
        },
        {
            from: './src/assets/favicons/favicon-16x16.png',
            to: 'assets/favicons',
        },
        {
            from: './src/assets/favicons/apple-touch-icon.png',
            to: 'assets/favicons',
        },
        {
            from: './src/assets/favicons/android-chrome-512x512.png',
            to: 'assets/favicons',
        },
        {
            from: './src/assets/favicons/android-chrome-192x192.png',
            to: 'assets/favicons',
        },
    ],
});

const processPluginProvider = new webpack.ProvidePlugin({
    process: 'process/browser',
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
        CopyWebpackPluginConfig,
        processPluginProvider,
    ],
    resolve: {
        fallback: {
            path: require.resolve('path-browserify'),
        },
    },
};
