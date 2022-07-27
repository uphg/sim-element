import commonConfig from './vite.common.config.js'

// https://vitejs.dev/config/
export default {
  base: '/sim-element/',
  build: {
    outDir: 'docs'
  },
  ...commonConfig
}
