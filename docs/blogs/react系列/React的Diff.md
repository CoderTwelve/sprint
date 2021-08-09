---
title: React Diff
date: 2021-07-28
categories: 
 - React
---

react的diff算法主要是通过fiber实现的，主要分为三种情况
1. 新内容为react元素
2. 新内容为文本
3. 新内容为数组

比较的时候，如果比较结果相同，则复用旧内容的fiber，结合新内容，生成新的fiber。
如果不相同，通过新内容创建新的fiber，然后内容fiber添加副作用，替换标签。或者给旧内容fiber及其所有相邻元素添加副作用，删除标签，最后将新的fiber设为父fiber的child