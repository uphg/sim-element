import path from 'path'
import vue from '@vitejs/plugin-vue2'
import Markdown from 'vite-plugin-md'
import markdownItSetup from './plugins/markdownItSetup'
const replacement = `${path.resolve(__dirname, './src')}/`

// https://vitejs.dev/config/
export default {
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
    Markdown({ markdownItSetup }),
  ]
}
