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

### 代码压缩
webpack4采用terser-webpack-plugin压缩js代码

使用optimize-css-assets-webpack-plugin压缩css代码

PurgeCSS 删除无用的css代码，配合mini-css-extract-plugin

### 缓存方面


### tree shaking
依赖ESM的特性，在编译阶段能够确定依赖关系

### 代码分割
将代码分离到不同的bundle中，之后我们可以按需加载，或者并行加载这些文件。这里通过splitChunksPlugin来实现。

### 懒加载和预加载
