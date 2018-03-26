# for 循环

* 1.  循环对象属性的时候，可以用*for...in*,遍历数组的时候用*for...of*
* 2.  *for...in*循环出的是 key,*for...of*循环出的是 value
* 3.  *for...of*不能循环普通对象，需要通过*Object.keys()*搭配
* 4.  *for...of*是 ES6 的新特性

```js
let aArray = ["a", 123, { a: "1", b: "2" }];
```

使用*for...in*

```js
for (let index in aArray) {
  console.log(`${aArray[index]}`);
}
```

使用*for...of*循环

```js
for (var value of aArray) {
  console.log(value);
}
```

添加一个属性后

```js
aArray.name = "demo";
```

```js
for (let index in aArray) {
  console.log(`${aArray[index]}`);
  // Notice!!aArray.name也被循环出来了
}
for (var value of aArray) {
  console.log(value);
}
```

*for-in*除了遍历数组元素以外，还会遍历自定义属性， *for-of*只循环 value，如果非要用*for-of*循环属性的话，配合*Object.keys()*使用

```js
var student = {
  name: "wujunchunan",
  age: 22,
  locate: {
    country: "china",
    city: "shenzhen",
    school: "guilin"
  }
};

for (var key of Object.keys(student)) {
  console.log(`key: ${student[key]}`);
}
```
