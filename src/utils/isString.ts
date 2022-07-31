function isString(value: unknown) {
  return typeof value === 'string' || value instanceof String;
};

export default isString
