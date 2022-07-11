import path from 'path'
import vue from '@vitejs/plugin-vue2'
import Markdown from 'vite-plugin-md'
import { highlight } from './src/utils/highlight'
import mdContainer from 'markdown-it-container'
import fs from 'fs'

const replacement = `${path.resolve(__dirname, './src')}/`

const src = `${path.resolve(__dirname, './src')}`

// https://vitejs.dev/config/
export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.js'),
      name: 'SimElement',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'element-ui'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          'element-ui': 'ELEMENT'
        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: 'src/',
        replacement: replacement,
      },
    ],
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      markdownItSetup(md) {
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
              return `<s-code source="${encodeURIComponent(
                highlight(source, 'vue')
              )}"
                path="${sourceFile}">`
            } else {
              return '</s-code>'
            }
          },
        })
      },
    }),
  ]
}
