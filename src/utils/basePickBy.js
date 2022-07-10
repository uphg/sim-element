
function basePickBy(obj, keys, callback) {
  let index = -1
  const length = keys.length
  const result = {}

  while (++index < length) {
    const key = keys[index]
    if (callback(obj[key], key, obj)) {
      result[key] = obj[key]
    }
  }

  return result
}

export default basePickBy