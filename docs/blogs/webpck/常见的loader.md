---
title: 常见的loader
date: 2021-07-17
categories: 
 - webpack
---

## 常见的loader及其作用
### 处理JavaScript
- babel-loader
babel-loader的作用是将js的新语法转换成浏览器能够识别运行的es5语法

- eslint-loader
eslint-loader的作用是规范化代码，在webpack5中已经废弃了，推荐使用eslint-webpack-plugin，[配置](https://my.oschina.net/u/4125329/blog/4913623)

- ts-loader
ts-loader用来解析typescript，最终结果是转换程JavaScript代码

### 处理CSS
- style-loader
创建style标签，将css-loader输出的css字符串放到标签内，然后将标签插入到html页面中

- css-loader
用来解析css代码，准确来说是将css代码转成字符串放入到一个数组中[模块ID， css代码字符串， '']

- sass-loader
用来处理.sass或.scss文件，将其转成css代码

- less-loader
用来处理less文件，将其转成css代码

- postcss-loader
用来给css代码添加上浏览器前缀，解决兼容性问题


### 处理图片、字体、音频等资源
- file-loader
作用是将JavaScript和css中导入该类资源的路径替换成打包后的地址，同时将文件输出到指定位置

- url-loader
作用是对小于指定阈值的文件进行base64编码，如果超过该阈值，可以指定fallback，使用file-loader进行处理

### 缓存
- cache-loader
作用是在一些性能开销较大的loader之前添加，将结果缓存到磁盘中，可以提高二次构建的速度。

webpack5之前是通过cache-loader和dll技术进行缓存，而webpack5在这方面进行了改进，使用长期缓存来提高编译速度。开发环境使用MemoryCachePlugin进行持久化到内存，生产环境使用IdleFileCachePlugin进行持久化到本地。

[webpack优化原理](https://zhuanlan.zhihu.com/p/110995118)

### Vue
- vue-loader
作用是解析和转换.vue文件，提取出其中的script块、style块和template块的代码，再分别把它们交给对应的loader去处理。