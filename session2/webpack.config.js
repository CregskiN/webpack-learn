const path = require('path');


module.exports = {
    mode: 'development',
    // entry: './src/index.ts', // 简写
    entry: {
        main: './src/index.js',
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]', // placeholder 占位符
                    outputPath: 'images/',
                    limit: 2048
                }
              },
            ],
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