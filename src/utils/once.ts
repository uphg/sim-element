import before from "./before"

function once(func: (...args: any[]) => any) {
  return before(2, func)
}

export default once