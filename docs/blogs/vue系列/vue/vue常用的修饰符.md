---
title: vue的修饰符
date: 2021-07-21
categories: 
 - vue系列
---

## .lazy
v-model使用，取代 input 监听 change 事件
## .stop
调用 event.stopPropagation()

## .capture
添加事件侦听器时使用 capture 模式。

## .once
只触发一次回调。

## .prevent
调用 event.preventDefault()

## .native
 监听组件根元素的原生事件

## .sync
v-bind使用，会扩展成一个更新父组件绑定值的 v-on 侦听器