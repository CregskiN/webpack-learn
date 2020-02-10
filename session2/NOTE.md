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

