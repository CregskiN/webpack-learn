const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {

    entry: {
        Home: path.resolve(__dirname, '../src/Home.tsx'),
        List: path.resolve(__dirname, '../src/List.tsx'),
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }, {
                loader: 'ts-loader'
            }]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader'
            }]
        }, {
            test: /\.?css$/,
            exclude: /node_modules/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader']
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/,]/,
                    priority: -10,
                    name: 'vendors'
                }
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new HtmlWebpackPlugin({
            title: 'MPA-Home',
            filename: 'Home.html',
            template: path.resolve(__dirname, '../public/index.html'),
            chunks: ['runtime', 'vendors', 'Home'],
        }),
        new HtmlWebpackPlugin({
            title: 'MPA-List',
            filename: 'List.html',
            template: path.resolve(__dirname, '../public/index.html'),
            chunks: ['runtime', 'vendors', 'List'],
        }),
        new MiniCssExtractPlugin(),
    ],

    output: {
        path: path.resolve(__dirname, '../build')
    }
}