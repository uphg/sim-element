import Input from './input'
console.log('Input')
console.log(Input)
console.log('hi')
Input.install = function (Vue) {
  Vue.component(Input.name, Input);
}

export default Input
