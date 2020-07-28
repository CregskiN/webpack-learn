# library的两种打包参数

## 1. 需求背景

webpack打包库文件，有如下需求

1. 兼容用户引入方式(四种)

``` js html
esmodule写法
import lib from 'library'; 
commonjs写法
const lib = require('library'); 
AMD写法
require(['library'], () => {}); 
script标签引入
<script src='library.js'></script>

``` 
    

## 2. 使用示例

``` js
output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './build'),
    library: 'lib', // 绑定到global(/window).library变量下
    libraryTarget: 'umd' // 规范
}
```

## 3. 实现逻辑

1. 将lib模块设置为变量，添加到名为lib的全局变量下
2. 导出方式兼容libraryTarget: umd(uniserval通用) = amd + cmj + esmodule

## 4. 参数解析

> library: string 

全局变量下的模块名

> libraryTarget: 'umd' | 'this' | 'window' | 'var'

添加规范。 umd通用模块规范，this就是this，window就是window，var兼容script导入

## 5. 新需求

``` js
import lib from 'library'; // 已引入lodash
import _ from 'lodash'; // 再次引入，导致 最终打包文件过大
```

## 6. Externals

设置屏蔽打包的库，以待用户自己下载

```js 
externals: {
    lodash: {
        commonjs: 'lodash', // 在commonjs中引入后，变量名必须为lodash
        root: '_' // 对于非amd commonjs esmodule导入，必须用<script>注入_
    },
    root: 'lodash'
}
```

