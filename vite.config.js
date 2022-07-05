const path = require('path')
const { createVuePlugin: Vue2 } = require('vite-plugin-vue2')
const replacement = `${path.resolve(__dirname, './src')}/`


// https://vitejs.dev/config/
export default {
  resolve: {
    alias: [
      {
        find: '~src/',
        replacement: replacement,
      },
    ],
  },
  plugins: [
    Vue2(/*options*/),
  ],
}
