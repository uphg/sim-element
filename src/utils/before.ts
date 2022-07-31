function before(n: number, func?: (...args: unknown[]) => any) {
  let result: (...args: unknown[]) => void
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  return function(this: any, ...args: unknown[]) {
    if (--n > 0) {
      result = func?.apply(this, args)
    }
    if (n <= 1) {
      func = void 0
    }

    return result
  }
}

export default before