---
title: BFC
date: 2021-05-10
categories: 
 - CSS
---

## 盒模型
CSS盒模型描述了通过文档树中的元素以及相应的视觉格式化模型所生成的矩形盒子。在进行布局时，浏览器的渲染引擎就会根据和模型将所有元素表示为一个一个矩形盒子，外观则有CSS决定。

### 视觉格式化模型
CSS视觉格式化模型定义了盒子生成的计算规则，这个计算规则取决于包含块。**盒子不受包含块的限制，当盒子的布局跑到包含块的外面时，就是我们说的溢出**

## 创建BFC
1. 根元素html
2. 浮动元素float不为none
3. 绝对定位元素absolute或fixed
4. 表格相关的元素display：table、inline-table、table-caption、table-cell
5. 行内块元素display：inline-block
6. overflow不为visible的元素
7. 设置display：flex、inline-flex、grid、inline-grid的元素

## BFC特点
- BFC内部的块级元素在垂直方向上一个接一个排列，而且相邻的块级元素外边距会重叠
- 每个元素的外边距的左边与包含块边框的左边相接触，即使存在浮动也是如此
- 浮动元素不会与BFC重叠
- 计算BFC高度时，浮动元素也会参数计算

## 应用
- 自适应多栏布局
- 防止外边距折叠
- 清除浮动