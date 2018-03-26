// 单例模式

function getSingle(fn) {
  let result

  return function() {
    return result || (result = fn.apply(this, arguments))
  }
}
