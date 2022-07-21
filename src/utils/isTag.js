// 判断该值的 Object.prototype.toString 是否为 [object type] 类型
function isTag(value, type) {
  return Object.prototype.toString.call(value) === `[object ${type}]`
}

export default isTag
