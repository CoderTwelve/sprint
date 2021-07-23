### 变量声明与作用域

ES6引入了let和const两个声明变量的关键字，用于解决var关键字会进行声明提升的问题，let和const的区别在于后者用于声明那些不会改变的变量

在ES6之前，js只有全局作用域和函数作用域，而在es6引入了块级作用域，在进入块级作用域时和let声明变量的那行代码之间存在一个暂时性死区，在这个TDZ内，无法使用let声明的变量，即便在这块级作用域外也声明了这个变量

### 数据类型

number类型添加了isNaN和isFinite两个方法

字符串类型添加了遍历器接口，添加了模板字符串，新增了includes、startWith和endWith这些方法

对于函数类型，添加了参数默认值，rest参数，新增了length属性表示参数的个数，需要注意的是这个属性在使用参数默认值时失真。

添加了箭头函数，还有进行了尾递归优化

添加了Symbol类型，用于表示独一无二的属性名，解决对象的属性冲突问题。

##### 引用类型方面

object类型添加的属性和方法简写，提供了5中遍历对象属性的方法

for in

Objectkeys

新了assign方法，is方法

新增了set和map及其子类型的集合类型



### 异步编程

添加了Promise、Generator、async

### 面向对象编程

添加了class关键字，是原型的语法糖，用于创建类，同时也添加了extends关键字，用于继承，实际上是寄生组合式继承的语法糖

还有新增super关键字用于调用原型的方法或者构造函数

```javascript
// 私有化类
class Person {
    constructor() {
        if (new.target === Person) {
            throw new TypeError('不能实例化该类')
        }
    }
}
```



### 模块化

在es6之前，js的模块化方案式commonjs和amd。前者是运行在服务器，后者运行在浏览器

ES6模块的执行时机是在编译阶段，设计思想是尽量的静态化，让在编译阶段就能确定模块的依赖关系以及输入和输入的变量

关键字是export和import

### Proxy和Reflect