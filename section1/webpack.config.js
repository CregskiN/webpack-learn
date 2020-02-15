const path = require('path');


module.exports = {
    mode: 'development',
    // entry: './src/index.ts', // 简写
    entry: {
        main: './src/index.ts',
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: 'bundle.js', // 打包后文件名
        path: path.resolve(__dirname, 'dist') // 输出路径(必须为绝对路径)
    }
}