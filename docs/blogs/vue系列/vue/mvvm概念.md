---
title: mvvm和mvc
date: 2021-07-19
categories: 
 - vue系列
---

## MVC
经典MVC模式中，M是指业务模型，V是指用户界面，C则是控制器，使用MVC的目的是将M和V的实现代码分离，从而使同一个程序可以使用不同的表现形式。

## MVVM
MVVM是Model-View-ViewModel 缩写，也就是把MVC中的Controller变成ViewModel。Model
层代表数据模型，View代表UI组件，ViewModel是View层和Model层的桥梁，数据会绑定到viewModel层
并⾃动将数据渲染到⻚⾯中，视图变化的时候会通知viewModel层更新数据。