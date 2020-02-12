# session2

1. loader - 打包静态资源

   - 图片

     - file-loader : 处理静态资源
       **底层**: 移动静态资源，返回一个文件名 # 注意 需要 html 和 jpg 在同一文件夹下，否则报找不到图片

     - url-loader : 处理静态资源
       **底层**: 压缩成 base64 添加到 bandle.js
       **优点**: 省下一此 http 请求,
       **缺点**：对于大文件，会极大拖慢首屏加载速度
       **解决**：options.limit 设置大小打包界限

   - 样式

     - css-loader, style-loader ,sass-loader  
        **底层**：css-loader 分析.css 引入关系，打包成一个.css，style-loader 将.css 挂载到 html.head 部分  
        **执行顺序**：从右往左

     - postcss-loader
       **使用方法**: 1.在根目录添加 postcss.config.css 2.在 package.json 添加浏览器支持信息

     - css-loader
       ````javascript
       {
               loader: 'css-loader',
               options: {
                   importLoaders: 2,  // 在此之前的loader数量
                   modules: true // 启用模块化css打包
               }
           }```
       ````

---

2. 在 ts 中使用 import 语法需要添加.d.ts

   - 此处列举 dell.jpg 的.d.ts

   ```typescript
   declare module "*.jpg" {
     const value: string;
     export default value;
   }
   ```

3. 打包静态资源的.scss, css

4. 打包字体文件  
   file-loader

5. plugins 在某个时刻运行的插件

   - html-webpack-plugin
     **功能**：在打包结束后自动生成一个 html 文件到输出目录，并自动绑定 bandle.js
     **运行时**： 打包完成后
   - clean-webpack-plugin
     **功能**: 在打包前，删除指定目录
     **运行时**： 打包前

6. entry 和 output 打包多文件

7. devtool

   - source-map  
     **功能**：生成[name].js.map 记录打包文件与**源文件**映射关系，提示源代码错误，报错可精确到行数  
     **精准度**: 精准到行:列  
     **源文件范围**: 业务代码+loader 代码

   - inline-source-map  
     **功能**: 将生成.map 编码为 base64 格式，内置到 bundle.js 中
     **精准度**: 精准到行:列  
     **源文件范围**: 业务代码+loader 代码

   - cheap-inline-source-map  
     **功能**: 将生成.map 编码为 base64 格式，内置到 bundle.js 中  
     **精准度**: 精准到行  
     **源文件范围**: 业务代码+loader 代码

   - cheap-module-inline-source-map  
     **功能**: 将生成.map 编码为 base64 格式，内置到 bundle.js 中  
     **精准度**: 精准到行  
     **源文件范围**: 业务代码+loader 代码+node_modules 代码

   - eval  
     **功能**: 以 eval 形式将业务代码在 bundle.js 中执行  
     **精准度**:  
     **源文件范围**: 业务代码+loader 代码
     **缺点**：提示信息不全

   > 最佳实践  
   > 开发环境 cheap-module-eval-source-map  
   > 生产环境 cheap-module-source-map

8. 实现需求：检测代码变化，自动打包

   - webpack --watch
     **功能**：监听变化，自动重新打包

   ```json
   package.json
   "scripts": {
   "watch": "webpack --watch"
   }
   ```

- webpack-dev-server
  **功能**：监听变化，自动重新打包，并刷新浏览器
  **优点**：1.使用 http 协议，可使用 ajax 2.支持 proxy 跨域请求 3.将打包文件存储在 RAM，提升速度

9. HMR - Hot Module Replacement  
   **功能**：1.只替换已改变代码，不刷新浏览器 2.在 ajax 请求，一个模块数据变动，其他模块不受干扰
   **开启方法**：1.config.devtool.hot = true, config.devtool.hotOnly=true 2.config.plugins 添加 webpack.HotModuleReplacementPlugin
   **手写 HMR**：(需下载@types/webpack-env)module.hot.accept('file',()=>{})监听 file 变化，执行回调  
   **为什么引入某些模块，比如 css 不需要手写 HMR?** css-loader 内置

   ```typescript
   import counter from "./counter";
   import number from "./number";

   counter();
   number();
   if (module.hot) {
     module.hot.accept("./number", () => {
       const oldDOM = document.getElementById("number");
       document.body.removeChild(oldDOM!);
       number();
     });
   }
   ```

10. babel - 此处用作 es 语法转换  
    tsconfig.json 不负责适配低版本浏览器没有 Promise 等变量

    > npm install babel-loader @babel/core @babel/preset-env -D && npm install @babel/runtime-corejs2

    > babel-loader

    **@babel/core**: babel 核心库，识别 js 代码内容，编译为语法树  
     **@babel/preset-env**: 编译部分(如 const ()=>{})为 ES5 代码，但有些变量没有(如 Promise)  
     **@babel/plugin-transform-runtime**: (devDependencies) 以闭包注入低版本浏览器不支持的变量(需配置codejs2)  
     **@babel/runtime-corejs2** : (dependencies)

关于 babel-polyfill babel-runtime  
[Babel 踩坑总结(二) —— babel-polyfill、babel-runtime 的选择](https://blog.csdn.net/zwkkkk1/article/details/89143424)

---

作业

1. style-loader css-loader scss-loader postcss-loader
2. output 配置

```

```
