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

## fs模块
fs模块的api操作基本分为文件操作、目录操作、文件信息、流着几个大方面，编程方面也支持同步、异步和Promise。

常用的有如下：
- fs.access()检查文件是否存在，以及nodejs是否有权访问
- fs.appendFile() 追加数据到文件，如果文件不存在，就创建文件
- fs.copyFile() 拷贝文件

- fs.mkdir() 创建文件夹
- fs.readdir() 读取目录的内容
- fs.rmdir() 删除文件夹
- fs.rename() 重命名文件或文件夹

- fs.readFile() 读取文件
- fs.open() 设置文件模式
- fs.close() 关闭文件描述符
- fs.writeFile() 将数据写入文件
- fs.watchFile() 监视文件的更改

## Buffer模块
JavaScript语言自身只有字符串数据类型，没有二进制的数据类型，但在处理图像TCP流或文件流时，必须使用到二进制数据，因此Nodejs定义了一个Buffer类，用来创建一个专门放二进制数据的缓存区，一个buffer类似一个整数数组，但它对应于V8堆内存之外的一块原始内存。

使用场景是nodejs处理I/O操作中移动的数据时