
function pick(obj, keys) {
  let index = -1
  const length = keys.length || 0
  const result = {}

  while (++index < length) {
    const key = keys[index]
    result[key] = obj[key]
  }

  return result
}

export default pick