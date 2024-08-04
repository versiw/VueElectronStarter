import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, swcPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import globalConfig from './config/index'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), swcPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@config': resolve('config')
      }
    },
    plugins: [
      globalConfig.webConfig.useUnpluginVueRouter
        ? [
            VueRouter({
              routesFolder: 'src/renderer/src/views',
              extensions: ['.vue'],
              exclude: [],
              dts: 'src/renderer/src/router/typed-router.d.ts'
            })
          ]
        : null,
      vue()
    ]
  }
})
