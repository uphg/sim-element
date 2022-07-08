function find(array, callback) {
  let index = -1
  const length = array.length || 0
  while (++index < length) {
    const item = array[index]
    if (callback(item, index, array)) {
      return item
    }
  }
  return null
}

export default find