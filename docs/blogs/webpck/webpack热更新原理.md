---
title: 热更新原理
date: 2021-07-217
categories:
 - webpack
author: 青菜白玉汤
---

HMR指的是应用程序在运行过程中，模块的替换、添加、删除都会不会引起整个程序的重新刷新。
<!-- more -->

## 作用
提高开发效率。开发时，HMR并不会引起整个应用程序的刷新，大大提高了重新构建速度。

## 原理
webpack-dev-server会创建两个服务器
1. Bundle Server
2. HMR Server

webpack打包时会将源码和一个socket服务器一起编译成bundle文件交给Bundle Server。这个socket服务器会在浏览器运行，与HMR Server建立websocket长连接。

当文件更新时，webpack会对文件进行再次编译，并生成一个hash值，这个hash值会被用来作为下一次热更新的标识，除此之外还会生成两个文件：.json文件，包含hash值和chunkId；和chunk.js文件。然后HMR Server向在浏览器运行的socket服务器推送要给一条消息，消息的内容包含此次打包后的hash值。socket服务器得到消息后，让浏览器向服务器发起Ajax请求，获取那个json文件和js，浏览器根据得到的json文件得知模块有哪些发生了变化，从而触发render流程，实现局部刷新。