const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    entry: {
        loadTemplates: './src/js/loadTemplates.js',
        searchUser: './src/js/searchUser.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/navbar.html',
            filename: 'navbar.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/search.html',
            filename: 'search.html',
        }),
        new DefinePlugin({
            'process.env.GITHUB_CLIENT_ID': JSON.stringify(process.env.GITHUB_CLIENT_ID),
            'process.env.GITHUB_CLIENT_SECRET': JSON.stringify(process.env.GITHUB_CLIENT_SECRET)
        })
    ]
};
