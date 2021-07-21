---
title: nextTick
date: 2021-07-19
categories: 
 - vue系列
---

## 作用
nextTick的作用是在下次DOM更新循环结束之后执行延迟回调，在修改数据之后立即使用这个方法，可以获取更新后的dom

因为vue在我们修改数据之后，并不是立即更新的，而是会开一个异步更新队列，当所有数据都变化完成之后，在统一进行更新。


## 原理
实现的原理是内部使用一个数组保存我们传入的回调函数。然后执行异步延迟函数，判断当前环境支持什么方法来清空那个数组。依次判断Promise.then、MutationObserver、setImmmediate、setTimeout。当事件循环到了微任务或者宏任务，执行函数就会依次执行数组中的回调。


promise => MutationObserver => setImmediate => setTimeout