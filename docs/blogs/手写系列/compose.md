---
title: 组合函数compose
date: 2019-01-22
categories: 
 - 手写系列
---

```javascript
function compose(...fns) {
  return fns.reduce((f, g) => {
    return (...args) => f(g(...args))
  })
}
```