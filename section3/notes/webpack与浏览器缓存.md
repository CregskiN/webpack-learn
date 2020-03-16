# webpack与浏览器缓存

问题背景：如果不使用强制刷新，浏览器不会再次请求js文件，而是使用已缓存的js

## 1. 解决办法 webpack打包后js文件命名使用contentHash

打包后命名如下

> main.f3a072ce9ec4fb7028ac
> vendors~main.967781804fbcdbdddca7.chunk

``` html
<script type="text/javascript" src="vendors~main.967781804fbcdbdddca7.chunk.js"></script>
<script type="text/javascript" src="main.f3a072ce9ec4fb7028ac.js"></script>
```

+ 老版本webpack的即使不修改文件contenthash也会变化
原因：minifest(文件关系)存储在每个文件中，即使不修改内容，minifest也可能变化，导致contenthash跟着变化
解决办法：配置optimization.runtimeChunk.name: 'runtime'，会在打包时生成runtime文件，专门存储minifest