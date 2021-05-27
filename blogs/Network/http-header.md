---
title: HTTP常见的请求头
date: 2021-05-25
categories: 
 - 计算机网络
---
HTTP常见的请求头字段分为四种：通用头字段、请求头字段、响应头字段和实体头字段
<!-- more -->

## 通用头字段
1. Cache-Control 用于控制缓存
2. Connection 用于控制TCP的连接
3. Date 创建报文的时间日期


## 请求头字段
1. Accept 浏览器可接受的内容类型
2. Accept-Language 浏览器可接受的内容语言
3. Accept-Charset 浏览器可接受的字符集
4. Accept-Encoding  浏览器接受的内容编码方式
5. Host   服务器的域名以及监听的端口号
6. If-Match-Since 上一次内容修改后生成的hash值


## 响应头字段
1. Accept-Ranges 服务器所支持的内容范围
2. Age      响应对象在代理缓存中存在的时间
3. ETag     某个资源的某个特定版本的标识符
4. Server   服务器的名称

## 实体头字段
1. Allow        对特定资源的有效动作
2. Content-Encoding 响应资源所使用的编码类型
3. Content-Language 所使用的语言
4. Content-Length 消息体的长度
5. Content-Range  完整消息的某个部分
6. Content-Type 当前内容的MIME类型
7. Expires      某个资源的时间日期
8.  Last-Modified 最后修改的日期