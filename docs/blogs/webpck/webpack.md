---
title: tapable
date: 2021-07-15
categories: 
 - webpack
---

## Tapable
一个类似Nodejs的EventEmitter的库，负责webpack的插件系统。

```javascript
const {
  SyncHook,             // 同步钩子
  SyncBailHook,         // 同步熔断钩子 遇到return就返回的
  SyncWaterfallHook,    // 同步流水钩子 执行的结果可以传递给下一个插件
  SyncLoopHook,         // 同步循环钩子
  AsyncParallelHook,     // 异步并发钩子
  AsyncParallelBailHook, // 异步并发熔断钩子
  AsyncSeriesHook,       // 异步串行钩子
  AsyncSeriesBailHook,    // 异步串行熔断钩子
  AsyncSeriesWaterfallHook // 异步串行流水钩子
} = require('tapable')
```

waterfall：同步方法，将值传给下一个函数
bail：熔断，当函数有任何返回值，就在当前执行函数停止
loop：监听函数返回true标识继续循环，返回undefined标识结束循环
sync同步方法
asyncSeries 异步串行钩子
asyncParallel异步并行


异步钩子
绑定：tapAsync、tapPromise、tap
执行：callAsync、promise

同步
绑定：tap
执行：call

## 插件
需要有一个apply方法，参数是webpack的compiler对象

## 构建流程

### 初始化option
### run开始编译
### make分析依赖，对每个依赖进行build
### resolve对模块的位置进行解析
### 构建每个模块
### 将loader加载完成module进行编译，生成ast
### 遍历ast，当遇到require这些时，收集依赖
### 所有依赖build完成，开始优化
### 输出到指定目录

## 准备阶段


调用WebpackOptionsApply将所有的配置options参数都转换成webpack的内部插件。
## 模块构建阶段
## 文件生成阶段