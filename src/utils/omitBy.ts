import basePickBy from "./basePickBy"

function omitBy(obj, callback) {
  const keys = Object.keys(obj)
  return basePickBy(obj, keys, (item, key, obj) => !callback(item, key, obj))
}

export default omitBy