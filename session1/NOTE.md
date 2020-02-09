# session1  

1. webpack是一个模块打包工具module bundler  
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

5. webpack.config.js
webpack 只认识ES Modules语法 **模块打包工具**  
commonJS(node常用) cmd amd规范
npx webpack index.js  