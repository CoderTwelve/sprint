---
title: webpack优化方案
date: 2021-07-17
categories:
 - webpack
author: 青菜白玉汤
---

## 提高构建速度
### 文件检索速度
对resolve参数进行合理的配置，告诉webpack怎么去搜索文件
resolve.extensions 后缀
resolve.modules
resolve.alias

还有loader的include和exclude缩小构建目标
### HMR
webpack-dev-server

### oneOf
### 缓存
- babel-loader
- terser-webpack-plugin
- cache-loader

### 多进程打包
thread-loader

### externals
阻止某些库打包到bundle，减少打包的体积

## 提高运行时性能

### Scope Histing
作用是分析模块之间的依赖关系，尽可能地把打包出来的模块合并到一个函数中去。
webpack4
```javascript
optimization: {
  concatenateModules: true
}
```

### 代码压缩
webpack4在production模式下，自动使用terser-webpack-plugin来处理压缩js代码。使用optimize-css-assets-webpack-plugin压缩css代码，使用purgeCSS删除无用的css代码。

PurgeCSS 删除无用的css代码，配合mini-css-extract-plugin

### 文件大小压缩
compression-webpack-plugin使用这个插件根据配置来压缩相应的文件。

### 缓存方面
利用hash、contenthash、chunkhash来命名打包后的文件。

### tree shaking
依赖ESM的特性，在编译阶段能够确定依赖关系
主要有两种方式：
1. usedExports，通过标记某写函数是否使用，之后通过Terser来进行优化
2. sideEffects，说明哪些文件有副作用，直接false表示整个项目的文件都没有副作用。

### 代码分割
将代码分离到不同的bundle中，方便控制资源的加载优先级
这里通过splitChunksPlugin来实现。