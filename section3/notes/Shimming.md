# Shimming

解释： webpack的polyfill

## 1. 抛出问题

`index.ts` 

``` ts
import _ from 'lodash';
import $ from 'jquery';
import { ui } from './jquery.ui'

ui()

const dom = $('<div>');
dom.html(_.join(['Creg', 'skiN'], '-'));
$('body').append(dom);
```

'jquery.ui.ts'

``` ts
export function ui() {
    $('body').css('background', 'red')
}
```

报错：找不到$  
分析：jquery.ui.ts中没有import $ ，能不能import一次，其他文件不用import
解决办法：webpack. ProvidePlugin()

## 2. ProvidePlugin

``` js
plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        _join: ['lodash', 'join']
    })
],
```

底层自动完成 import $ from 'jquery'; 

## 3. 抛出另一个问题：

垫片能否帮我完成，让所有的this指向window

``` js
{
    loader: 'imports-loader?this=>window'
}
```
`⚠️注意`：使用该loader，必须在babel转换之前，如搭配ts使用，则不能用babel完成ts转换
