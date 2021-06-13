---
title: node之EventEmitter
date: 2021-06-13
categories: 
 - Node
---

## 是什么
Node采用事件驱动机制，而EventEmitter就是就是node实现事件驱动的基础。在EventEmitter的基础上，Node几乎所有的模块都继承了这个类，这些模块拥有了自己的事件，可以绑定/触发监听器，实现了异步操作。

## 原理
EventEmitter是一个构造函数，内部存在一个包含所有事件的对象。实例方法emit用来触发事件，第一个参数是事件的类型，第二个参数是触发事件函数的参数
```javascript
function emit(eventType, ...args) {
  this.events[type].forEach(cb => Reflect.apply(cb, this, args))
}
```
on、addListener、prependListener都是添加事件监听触发函数。

removeListener/off是移除事件监听函数
