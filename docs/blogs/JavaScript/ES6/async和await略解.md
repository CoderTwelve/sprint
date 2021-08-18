---
title: async和await解析
date: 2021-08-17
categories: 
 - JavaScript
---

## 概述
async关键用于声明一个异步函数，并将返回值使用Promise.resolve包装成一个promise对象。而await关键字的作用则是暂停执行异步函数后面的代码，等异步函数有了结果并返回后，才会继续运行异步函数。

这两个关键字的组合，提供了在不阻塞主线程的情况下使用同步代码实现异步访问资源的能力，并且使得代码逻辑更加清晰，而且支持try-catch来捕获异常。

它俩的原理就是async是Generator函数的语法糖，而await是promise函数的语法糖

## Generator函数
Generator函数是一个状态机，封装了多个内部状态。执行生成器函数会返回一个遍历器对象，可以依次遍历生成器函数内部的没有给状态，但是只有调用next方法才会遍历下一个内部状态，yield表示负责暂停。

至于为什么生成器函数暂停和恢复，主要依赖于线程。

一个线程（函数）执行到一半，需要暂定执行时，将执行权交给两一个线程（函数），等到稍后回收执行权的时候，再恢复执行。这种可以并行执行、交换执行权的线程（函数），就叫做协程。

协程时一种比线程更加轻量级的存在，一个线程上可以存在多个协程，但是只能同时执行一个协程。

执行器：封装执行生成器的代码的函数。

```javascript
// 生成器函数
function* foo() {
  let res1 = yield fetch('http://baiyu.com')
  let res2 = yield fetch('http://baiyu.com')
  let res3 = yield fetch('http://baiyu.com')
}
// 执行器
function executor(Gen) {
  const g = Gen()
  const next = (data) => {
    const res = g.next(data)
    if (res.done) return res.value
    res.value.then((data) => next(data))
  }
  next()
}
```


## async和await
使用这两个关键字来改造
```javascript
const foo = async function foo() {
  let res1 = await fetch('http://baiyu.com')
  let res2 = await fetch('http://baiyu.com')
  let res3 = await fetch('http://baiyu.com')
}
```
我们可以发现，async函数就是生成器函数，而await代替了yield。而且async函数改进了生成器函数，就是内置了执行器，并且将返回值封装成Promise对象。

```javascript
function foo() {
  const spawn = (Gen) => new Promise((resolve, reject) => {
    const g = Gen()
    const step = (nextFunc) => {
      let next
      try {
        next = nextFunc()
      } catch(e) {
        return reject(e)
      }
      if (next.done) return resolve(next.value)

      Promise.resolve(next.value).then(res => {
        step(() => g.next(res))
      }, rej => {
        step(() => g.throw(e))
      })
    }
    step(() => g.next())
  })
  return spawn(function* () {

  })
}
```

我们可以知道，await会产生一个微任务（Promise.then)，这个微任务放进任务队列中的时机是在执行await之后，直接跳出async函数，执行其他代码，其他代码执行完毕后，再回到async函数去执行剩下的代码，然后把await后面的代码注册到微任务队列中，