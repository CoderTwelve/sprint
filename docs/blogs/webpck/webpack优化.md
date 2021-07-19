---
title: webpack优化方案
date: 2021-07-17
categories:
 - webpack
author: 青菜白玉汤
---

## 提高构建速度
### 文件检索速度
### HMR
### oneOf
### 缓存
### 多进程打包
### externals

## 提高运行时性能

### 代码压缩

### 缓存方面

### tree shaking
依赖ESM的特性，在编译阶段能够确定依赖关系

### 代码分割
将代码分离到不同的bundle中，之后我们可以按需加载，或者并行加载这些文件。这里通过splitChunksPlugin来实现。

### 懒加载和预加载
