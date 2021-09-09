---
title: Object常用的方法
date: 2021-07-22
categories: 
 - JavaScript
---

## 静态方法
- assign 通过复制一个或多个对象来创建一个新对象
- create 使用指定的原型对象和属性创建一个新对象
- definePrototype 给对象添加一个属性并指定该属性的配置
- freeze 冻结一个对象
- getPrototypeOf 返回指定对象的原型对象
- keys 返回一个包含所有给定对象自身可枚举属性名称的数组


ForIn枚举一个对象的属性（也包含原型属性）

object.hasOwnProperty() 检测这个属性是来自哪的

prop in obj 判断指定属性是否在指定对象或其原型链上 

delete不会删除原型属性

configurable
writable
enumerable