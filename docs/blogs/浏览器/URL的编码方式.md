---
title: URL的编码方式
date: 2021-07-12
categories: 
 - 浏览器
---

编码方法由网页的编码决定，也就是由HTML源码中字符集的设定决定。

　　`<meta http-equiv="Content-Type" content="text/html;charset=xxxx">`

如果上面这一行最后的charset是UTF-8，则URL就以UTF-8编码；如果是GB2312，URL就以GB2312编码。



网址路径的编码，用的是utf-8编码。

查询字符串的编码，用的是操作系统的默认编码。

GET和POST方法的编码，用的是网页的编码。

encodeURI()是Javascript中真正用来对URL编码的函数。最后一个Javascript编码函数是encodeURIComponent()。与encodeURI()的区别是，它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码。