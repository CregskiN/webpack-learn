# session2

1. loader  
    + file-loader : 处理静态资源  
    底层: 移动静态资源，返回一个文件名 # 注意 需要html和jpg在同一文件夹下，否则报找不到图片  
    options
    + url-loader : 处理静态资源  
    底层: 压缩成base64添加到bandle.js  
    优点: 省下一此http请求,  
    缺点：对于大文件，会极大拖慢首屏加载速度  
    解决：options.limit设置大小打包界限


2. .d.ts  
    + 在.ts中直接使用import导入文件，需要说明文档，此处列举dell.jpg的.d.ts
    ```typescript
    declare module '*.jpg' {
        const value: string;
        export default value;
    }
    ```

3. 

