import path from 'path'
import fs from 'fs'
import mdContainer from 'markdown-it-container'
import { highlight } from './highlight'

const src = `${path.resolve('./src')}`

function getComponentName(sourceFile) {
  const names = sourceFile.split('/')
  return names.map((item) => item.replace(/^(\w)/, (_, c) => (c ? c.toUpperCase() : ''))).join('')
}

function markdownItSetup(md) {
  md.use(mdContainer, 'code', {
    validate(params) {
      return !!params.trim().match(/^code\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^code\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const sourceFileToken = tokens[idx + 2]
        if (!sourceFileToken) return
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(src, 'examples', `${sourceFile}.vue`),
            'utf-8'
          )
        }

        const componentName = getComponentName(sourceFile)

        return `<s-code source="${encodeURIComponent(
          highlight(source, 'vue')
        )}"
          :part="${componentName}"
        >`
      } else {
        return '</s-code>'
      }
    },
  })
}

export default markdownItSetup