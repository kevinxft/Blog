// 数据
var arr = [
  { name: "kevin", age: 80 },
  { name: "mango", age: 23 },
  { name: "jerry", age: 90 },
  { name: "tom", age: 5 }
];

function prop(key) {
  return function(obj) {
    return obj && obj[key];
  };
}
console.log(arr.map(prop("name")));
// [ 'kevin', 'mango', 'bury', 'tom' ]

function propEq(key, value) {
  return function(obj) {
    return obj && obj[key] === value;
  };
}

console.log(arr.find(propEq("name", "kevin")));
console.log(arr.filter(propEq("name", "kevin"))[0]);
// { name: 'kevin', age: 80 }
