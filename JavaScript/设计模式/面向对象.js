//面向对象
//定义人（姓名，性别，年龄
let People = function(name) {
  this.name = name
}
//动作
People.prototype = {
  eat: function(someThing) {
    console.log(`${this.name}吃${someThing}`)
  }
}
// 创建自己
let kevin = new People('Kevin', '男', 24)
kevin.eat('火锅')

//面向过程
let eat = function(show, someThing) {
  console.log(`${who}吃${someThing}`)
}

eat('Kevin', '火锅')

// 面向对象
kevin.coding = function() {
  console.log(`${this.name}在写代码`)
}

kevin.coding()

// 面向过程
let coding = function(who) {
  console.log(who + '写代码')
}

coding('Kevin')
