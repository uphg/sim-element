type PickObj = {
  [key: string]: any
}

function pick(obj: PickObj, keys: string[]) {
  let index = -1
  const length = keys.length || 0
  const result: PickObj = {}

  while (++index < length) {
    const key = keys[index]
    result[key] = obj[key]
  }

  return result
}

export default pick