---
title: Tree Shaking
date: 2021-07-26
categories: 
 - webpack
---

## 概念
移除JavaScript上下文中的未引用代码，依赖于ES6模块静态结构特性，就是在编译阶段就能够确认模块依赖关系。

## webpack中使用
在webpack4中，通过package.json中的“sideEffects”属性作为标记，想解析器compiler提供提示，表明项目中的哪些文件是es6模块的，可以安全地删除文件中未使用的部分。


如果说我们的项目所有代码都不包含副作用，那么我们可以将“sideEffects”字段标记为false，告诉webpack，可以安全地删除为用到的export导出。

副作用是在导入时会执行特殊行为的代码，而且不是仅仅暴露一个或多个export。想pofyy

死代码和活代码的例子：
```javascript
import { cube } from 'math.js'
doSomething(cube)
```
导入并赋值给js对象，cube在doSomething中被用到，被webpack视为活代码。

```javascript
import { cube } from 'math'
doSomething()
```
cube被导入并且赋值给js对象，但是并没有被使用到，会被webpack视为死代码。

```javascript
import 'math'
// do something
```
整体导入，但是没有赋值给js对象，也没有被用到，会被当做死代码。

```javascript
import 'the-lib'
// do
```
导入整个库，也没有赋值给js对象，也没有被用到，但是会被当做活代码，因为webpack对库的导入和本地代码的导入的处理的方式不同。

## 使用
为了能够顺利进行tree shaking
1. 使用es6的模块
2. 确保webpack等工具不会把es6模块转变为commonjs
3. 在package.json文件中，添加sideEffects属性
4. 使用生产模式

## 优化方式
1. sideEffects
2. usedExports

相对来说第一种更有效，因为它允许跳过整个模块、文件或整个文件子树。usedExports依赖terser去检测语句中的副作用。


## commonjs无法进行tree shaking原因
commonjs的require导入方式是动态的，因此无法确定在实际允许前需要或者不需要某些模块。而ES6的模块采用的是完全静态的导入语法，可以在代码不运行的情况下就能够分析出不需要的代码。