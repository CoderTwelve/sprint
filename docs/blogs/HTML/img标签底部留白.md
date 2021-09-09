---
title: img标签底部留白
date: 2021-07-15
categories: 
 - HTML
---

首先img表示的display属性的默认值为inline，还有就是vertical-align默认值是baseline，其他常见的值为top、bottom，middle。baseline和bottom的取值之间有一定的距离，而这个距离就是img标签底部留白的原因，要想去掉这段空白，最直接的办法是设置图片的vertical-align为其他值。另外top和bottom之间的值为line-height，如果把line-height设置为0，那么top和bottom之间的值也为0，那么空白也会消失。