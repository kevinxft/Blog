## ES 基础

ECMAScript 定义的 6 种原始类型:

* Boolean
* Number
* String
* Undefined
* Null
* Symbol(ES6)

原始类型并不包括 Object

### typeof

typeof 得到的值有以下几种: **undefined** **boolean** **number** **string** **object** **function** **symbol**

* typeof null => object
* typeof [1,2] => object 引用类型除了 function，其他都是 object
* typeof Symbol() => symbol

### instanceof

实例和构造函数对应，可以用 instanceof 来判断是否是数组

```js
function Foo(name) {
  this.name = name;
}

var foo = new Foo("bar");
console.log(foo instanceof Foo);
```
