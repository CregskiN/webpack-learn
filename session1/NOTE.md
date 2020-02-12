# session1  

1. webpack是一个**模块打包工具** module bundler  
模块包括但不限于： .css .ts .png .jpeg 

2. 模块规范  
    + **ES Modules** import ... from '...'
    + **commonJS** const xx = require('...')
    + **AMD**
    + **CMD**

3. npx webpack -v # 在当前目录找webpack并运行  
> 好处: 不同项目下的webpack版本不同，可以正常运行 

4. npm info webpack # 查询webpack包信息(包括版本号)  
npm install webpack@4.25.0 # 指定webpack版本

5. 三种运行webpack的方法(命令行需安装webpack-cli)
    + webpack index.ts # 使用全局webpack包
    + npx webpack index.js# 使用目录下webpack包
    + npm run bundle -> webpack 配置package.json script，运行npm run bundle 先在node_modules找

6. 打包数据

7. ts-loader 可以编译const ()=>{}

```
Hash: 4296ba2e8ff7d827df3c
Version: webpack 4.41.5
Time: 792ms
Built at: 2020-02-09 22:36:41
    Asset      Size  Chunks             Chunk Names
bundle.js  1.06 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/index.ts 285 bytes {0} [built]
```
