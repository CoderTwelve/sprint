---
title: 常用的DOM方法
date: 2021-07-14
categories: 
 - JavaScript
---

## 创建
##### 1. createElement
创建一个新元素

##### 2. createTextNode
创建一个文本节点

##### 3. createDocumentFragment
创建一个新的空白的文档片段。虽然是dom节点，但他们不是主dom树的一部分，因此这种节点存在于内存中，因此将子元素插入文档片段时并不会引起页面回流，将文档片段附加到dom树时，文档片段会被它的所有子元素所代替。

## 添加
#### 1. appendChild

#### 2. insertBefore(new, ref)
将子节点插入指定位置

#### 3. setAttribute
添加属性，如果已经存在就改变属性

## 删除
#### 1. 调用父节点的removeChild
虽然被删除的节点不在文档树种，但还在内存中，可以随时再次被添加到别的位置

## 更新
#### 1. innerHTML

#### 2. innerText
读取属性时，不返回隐藏元素的文本

#### 3. textContent
返回所有文本

#### 4. style
修改css属性

## 查询
#### 1. querySelector
根据传入的选择器，返回第一个被找到的元素节点

#### 2. querySelectorAll
返回一个Element节点列表

#### 3. getElementById/ClassName/TagName/Name