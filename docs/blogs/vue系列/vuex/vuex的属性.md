---
title: vuex的属性
date: 2021-07-21
categories: 
 - vue系列
---

## 作用
给vue应用程序提供状态管理服务，帮助我们管理共享状态

## state
vuex状态管理的数据源

## Getter
可以认为store的计算属性
```javascript
// 可以设置第二个参数
getters: {
  abc: (state, getters) => {}
}
```

## Mutation
`this.$store.commit()`，通过提交mutation的方式，能够明确地追踪到状态的变化。可以有机会去记录每次状态的改变，形成快照。

## Action
`this.$store.dispatch()`
```javascript
actions: {
  foo(context: { state, commit }, payload) {}
}
```



## Module
解决store对象臃肿的问题，将store分割成一个个模块，每个模块都有自己的state、mutation、action、getter这些

命名空间：默认情况下，模块内部的action、mutation和getter都是注册在全局命名空间的。使用命名空间后：
```javascript
getters['m1/getter1']
dispatch('m1/action1')
commit('m1/mutation1')
```

## 辅助函数
mapState 帮助我们快速生成计算属性
```javascript
computed: {
  ...mapState({
    'a',
    'b'
  })
}
```

mapGetters将store的getter映射到局部计算属性
```javascript
computed: {
  ...mapGetters([
    'abc',
  ]),
  // 如果想要给getter取别名，可以使用对象的形式
  ...mapGetters({
    abc: 'hello'
  })
}
```


mapMutations将组件的methods映射为store.commit调用
```javascript
methods: {
  ...mapMutations([]) // 也可以是对象的形式
}
```
mapActions也是将组件的methods映射为store.dispatch调用