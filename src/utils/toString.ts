function toString(value: unknown) {
  return typeof value === 'string' ? value : String(value)
}

export default toString