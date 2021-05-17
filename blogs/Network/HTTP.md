---
title: HTTP和HTTPS的区别
date: 2021-05-11
categories: 
 - 计算机网络
---

## HTTP是什么？
HTTP全称叫超文本传输协议，是一个简单的请求-响应协议，它通常运行在TCP之上，是面向事务的应用层协议。

[HTTPS](./HTTPS.md)

## HTTP的作用
HTTP规定了浏览器和万维网服务器之间如何进行传输文档。

## HTTP特点
1. 简单灵活可扩展，我们可以任意添加头字段实现相应的功能
2. 可靠传输，因为它是基于TCP/IP协议的协议
3. 无状态，每次请求都是相互独立的、毫无关联的。


## HTTPS和HTTP的区别
我们知道HTTP最大的缺点是明文传输，因此HTTP是不安全的，无法验证通信双方的身份，也不能判断报文是否被篡改过。因此HTTPS就在HTTP与TCP之间添加了一层SLL/TLS协议，用来对数据进行加密。

区别
- HTTPS比HTTP更加安全，因为HTTPS通信时还需要经过一层SSL/TLS协议
- HTTPS协议需要到CA申请证书，因此成本方面比较高
- HTTPS握手阶段比较费时，因此页面的加载时间会比HTTP慢
- HTTPS连接缓存不如HTTP高效
- HTTP使用80端口，而HTTPS使用443端口