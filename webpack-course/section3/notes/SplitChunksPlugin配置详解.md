# SplitChunksPlugin配置

## 1. 默认配置

``` js
optimization: {
    splitChunks: {
        chunks: 'async',
        minSize: 30000,
        minRemainingSize: 0,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 6,
        maxInitialRequests: 4,
        name: true,
        automaticNameDelimiter: '~',
        automaticNameMaxLength: 30,
        cacheGroups: {
            defaultVendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    }
}
```

## 2. 详解

> chunks: 'async' | 'all'  | 'initial'

* async：对异步import的代码进行code splitting  
* all：无论异步与否，均执行code splitting
* initial模式下会分开优化打包异步和非异步模块。而all会把异步和非异步同时进行优化打包。

> 也就是说moduleA在indexA中异步引入，indexB中同步引入，initial下moduleA会出现在两个打包块中，而all只会出现一个。

`异步导入` 

``` js
function getComponent() {
    return import( /*webpackChunkName:"lodash"*/ "lodash").then(({
        default: _
    }) => {
        // default兼容commonJS
        const element = document.createElement("div");
        element.innerHTML = _.join(["Creg", "skiN"], "-");
        return element;
    });
}

getComponent().then(element => {
    document.body.appendChild(element);
});
```

`同步导入` 

``` js
import _ from 'lodash';
const element = document.createElement('div');
element.innerHTML = _.join(['Creg', 'skiN'], '-');
document.body.appendChild(element)
```

> minSize: number (b) 代码分割启用的最小标准

> maxSize：number(b) 单个模块最大大小

超过这个数值的库，webpack会尝试多次拆分

> minChunks：number 模块最小被引用次数

> maxAsyncRequests： number; 最大异步iport数量

超过这个数值则不再进行代码分割

> maxInitialRequests： number; 

入口文件（初次加载）最大代码分割数量

> name: boolean, 是否允许缓存组设置filename

> automaticNameDelimiter: 'string'; 连接符

代码分割后文件命名规则：cacheGroup 链接符 magicComponent命名

> automaticNameMaxLength: number; 限制code splittig后.js文件名长度

> catchGroup: {vendors: {}, default: {}} 缓存组

分析代码阶段，符合同一类条件的模块被分到同一个缓存组，最终打包为一个.js文件

* vendors: {test: /正则/, priority: number}
  + test: 可以code splitting的代码所在位置  
  + priority: 权值 有可能一个模块符合两个缓存组的条件，优先进入权值大的缓存组  
  + reuseExistingChunk: boolean 是否模块复用

## 3. 要点

* 无论代码是否使用异步代码，都执行SplitChunksPlugin  

`笔记` 

``` js
optimization: {
    splitChunks: {
        chunks: 'all', // 针对异步导入分割 // 'all' @全部(按cacheGroups.defaultVendors配置进行) // 'initial' 针对同步代码分割
        minSize: 30000, // 引入模块大于minSize才进行代码分割 30000b = 30kb // 一般自写模块不会超过这个大小
        // minRemainingSize: 0,
        maxSize: 0, // 代码分割，每个库最大不超过maxSize bytes
        minChunks: 1, // 一个模块被使用至少minChunks次才代码分割
        maxAsyncRequests: 6, // 限制同时加载库数量  做法：前maxAsyncRequests个库代码分割，其他不管
        maxInitialRequests: 4, // 入口文件做代码分割，最多有maxInitialRequests个
        automaticNameDelimiter: '~', // 文件生成 文件名连接符
        automaticNameMaxLength: 30,
        cacheGroups: { // 缓存组 对下边条件分别代码分割
            defaultVendors: {
                test: /[\\/]node_modules[\\/]/, // 针对从node_modules导入的模块
                priority: -10, // 打包绝对优先级 // 优先级高于test筛选
                // filename: 'vendors.js' // 打包成的文件名
            },
            default: {
                // minChunks: 1,
                priority: -20, // 打包绝对优先级
                reuseExistingChunk: true, // 复用打包模块 // 如编译a.js b.js都导入c模块，c只被打包一次
                filename: 'common.js'
            }
        }
    }
},
```

