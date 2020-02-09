const path = require('path');


module.export = {
    // 入口
    entry: './src/index.js',

    output:{
        filename: 'bundle.js', // 打包后文件名
        path: path.resolve(__dirname,'bundle') // 输出路径(必须为绝对路径)
    }
}