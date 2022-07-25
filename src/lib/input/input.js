import { inputProps, useInput } from '../shared'

export default {
  name: 'SInput',
  props: inputProps,
  setup(props, context) {
    const { render, expose } = useInput(props, context)
    expose && context.expose(expose)
    return render
  }
}
