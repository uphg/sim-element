import { inputProps, useInput } from '../shared'

export default {
  name: 'SInput',
  props: inputProps,
  setup(props, context) {
    const template =  useInput(props, context)
    template.expose && context.expose(template.expose)
    return template.render
  }
}
