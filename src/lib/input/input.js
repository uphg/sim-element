import { inputProps, useInput } from '../shared'

export default {
  name: 'SInput',
  props: inputProps,
  setup(props, context) {
    return useInput(props, context, {
      onKeyup(event) {
        if (event.keyCode !== 13) return
        console.log('执行回车')
      }
    })
  }
}
