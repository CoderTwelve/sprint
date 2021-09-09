---
title: 路由实现
date: 2021-07-15
categories: 
 - vue系列
---

## 注册
通过vue.use方法注册插件的时候，是调用插件的install方法。vue-router的install方法里面通过vue.mixin方法混入每个组件的beforeCreate和destoryed里面，然后全局注册两个路由组件view和link

在beforeCreate里面主要是初始化路由，给组件添加`_route`属性，这个属性的值主要是当前的路由对象。对于`this._router`，表示的是vuerouter的实例，是在new Vue的时候传入的，`this._routerRout`表示离当前组件传入了router对象作为配置而实例化的服饰里。

## 实例化
在Router的构造函数里面，根据我们配置的路由创建一个路由匹配对象matcher，然后根据路由模式选择创建相应的history对象。

## 组件触发beforeCreate
触发beforeCreate的时候，会指定VueRouter实例的init方法。init方法的处理主要是调用history对象的路由切换方法transitionTo，这个方法里面主要做的就是根据路由实例的路由匹配对象的match方法和目标location和当前路径current找到匹配的路径route对象。

拿到route对象之后调用confirmTransition方法，进行真正的路由切换。

当我们点击进行路由跳转的时候，会调用路由实例的push方法，这个方法里面会先执行transitionTo做路径的切换，在切换完成之后执行的回调函数里面，会调用一个改变url的函数，在这个函数里面会调用浏览器原生history的pushState接口或者replaceState接口，更新浏览器的url地址，并把当前URL压入历史栈中。


## transitionTo方法
当我们进行路由跳转的时候，会调用这个方法。这个方法的主要逻辑是：

首先根据目标location和当前路径执行路由实例的match方法，来寻找匹配的目标路径，然后得到一个要跳转的route对象。然后执行confirmTransition方法去进行真正的路由切换。

路由切换的过程：主要的工作是拿根据传进入route和当前的route来进行解析，得到哪些组件需要保留，哪些组件需要销毁，哪些需要更新。

然后通过典型的异步函数队列执行的模式，执行一系列钩子函数。

然后执行回调函数onComplete，在这个回调函数里面，主要是更新路由。

### URL的改变
通过路由对象的push或者replace方法来改变的。

Hash模式的push主要是location.hash，如果浏览器支持，就使用原生history对象的pushState或者replaceState

History模式就使用原生的History对象的pushState或者replaceState来改变URL

改变URL后会触发监听监听事件，在Hash模式下，根据当前环境来选择监听哪种事件，优先是popState，其次是hashchange事件。而History模式下就是popState事件

### 组件变化
渲染哪些组件主要是根据当前的路径来判断的。

我们在install阶段的时候，给Vue实例的原型添加了一个响应式属性`$route`，这个属性的值就是当前的路由

渲染的时候通过当前匹配的路径和一些属性找到相应的路由记录，拿到要渲染的组件，然后渲染


VueRouter在混入的BeforeCreate函数里面，给vue根实例定义了一个响应式属性`_route`，我们在每个`router-view`执行渲染函数的时候，都会访问当前的路由，就会触发`_route`的getter方法，进行依赖的收集，之后进行组件切换的时候会将最新的路由交给`app._route`，就触发了setter方法，就会通过router-view的渲染watcher更新，重新渲染组件。