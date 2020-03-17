const path = require('path');

module.exports = {
    mode: 'production',

    // target: 'node',

    entry: {
        library: './src/index.ts',
    },

    externals: {
        lodash: 'lodash',
        root: 'lodash'
    },

    module: {
        rules: [{
            test: /\.ts?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
                'ts-loader'
            ]
        }]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build'),
        library: 'root', // 绑定到global(/window).library变量下
        libraryTarget: 'umd' // 规范
    }
}