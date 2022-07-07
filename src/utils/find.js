function find(array, callback) {
  let index = -1
  const length = array.length || 0
  while (++index < length) {
    const item = array[index]
    console.log('item')
    console.log(item)
    if (callback(item, index, array)) {
      return item
    }
  }
  return null
}

export default find