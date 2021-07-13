---
title: Promise
date: 2021-07-13
categories: 
 - JavaScript
---

## 概述
Promise是es6提供的一个异步编程解决方案，它比传统的回调函数更加合理以及更加强大，解决了回调函数的回调地狱问题。

## 状态方面
Promise对象有三个状态，分别是pending、fulfilled、rejected。这三种状态不受外界的影响，只有异步操作的结果来决定当前Promise对象是哪一个状态。fulfilled和rejected只能由pending状态转变而来，而且是一旦发生改变之后，就不会在改变。

## 原型方法
Promise对象的原型方法有三个，分别是then、catch、finally。

##### then方法
then方法是实例状态发生改变时的回调函数，第一个参数是变为fulfilled状态的回调函数，第二个参数是变为rejected状态的回调函数。这个方法会返回一个新promise实例。

##### catch方法
catch方法是指定当Promise实例内部发生错误时的回调函数。

##### finally方法
finally方法是指定无论Promise实例最终的状态是什么都会执行的回调函数。

## 构造函数方法
Promise构造函数的方法有7种，分别是all、race、allSettled、any、resolve、reject以及try。

##### all方法
Promise.all() 用于将多个Promise实例，包装成一个新的Promise实例，这个方法接收一个Promise实例数组，这个新实例的状态是当数组里面的Promise实例的状态都变成fulfilled了才会转成fulfilled状态，这些实例的返回值会组成一个数组传递给这个新实例的回调函数。

如果说数组里面有一个实例的状态变成了rejected，那么这个新实例的状态就会变成rejected。这时候第一个变成rejected的实例的返回值会传递给新实例的回调函数。

##### race方法
该方法和all方法的用法一样，只不过是这个方法返回的新实例的状态是由参数数组里面第一个率先改变状态的实例所决定。

##### allSettled方法
es2020引入的方法

该方法的用法也是和all方法一样，该方法返回的promise实例的状态只有fulfilled。无论数组里面的promise实例的状态是什么，只要所有实例都有了返回结果，那么这个新实例就会变成fulfilled状态。

```javascript
Promise.allSettled([p1, p2]).then(res => {
  // res [ { status: 'fulfilled', value: xxx }, { status: 'rejected', reason: xxx }]
})
```
这方法的使用使用场景是不关心异步操作的结果，只关心这个操作有没有结束

##### any方法
该方法是es2021引入的，它的用法也是和all一样，状态的变化是和race方法相反。

只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态，如果所有参数实例都变成了rejected状态，包装实例就会变成rejected状态。

##### resolve/reject
这两个方法都是将现有对象转为Promise对象，Promise.resolve()方法会返回一个fulfilled状态的Promise对象，而Promise.reject()则是rejected状态的Promise对象

