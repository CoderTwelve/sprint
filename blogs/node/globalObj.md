---
title: Nodejs常见的全局对象
date: 2021-06-01
categories: 
 - Node
---

## global
Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

`__filename` 表示当前正在执行的脚本的文件名

`__dirname` 表示当前执行脚本所在的目录

`setTimeout` 延时器，会返回一个定时器的句柄值

`clearTimeout` 用于停止一个之前通过setTimeout创建的定时器

`setInterval` 在指定的毫秒(ms)数后执行指定函数，并且会不停的调用

`clearInterval` 用于停止一个之前通过setInterval创建的定时器

`console` 用于提供控制台标准输出

`process` 用于描述当前nodejs进程状态的对象