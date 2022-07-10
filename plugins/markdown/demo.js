export const linksPlugin= (
  md,
  options
) => {

  md.renderer.rules.html_block = (tokens, idx, options, env, self) => {
    console.log('tokens')
    console.log(tokens)
    console.log('idx')
    console.log(idx)
  }
}