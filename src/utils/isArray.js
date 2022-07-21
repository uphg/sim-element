import isTag from "./isTag"

function isArray(value) {
  return isTag(value, 'Array')
}

export default Array.isArray || isArray