import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, swcPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { rendererConfig } from './config'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), swcPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    base: './',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@config': resolve('config')
      }
    },
    plugins: [
      rendererConfig.useUnpluginVueRouter
        ? [
            VueRouter({
              routesFolder: 'src/renderer/src/views',
              extensions: ['.vue'],
              exclude: [],
              dts: 'src/renderer/src/types/typed-router.d.ts'
            })
          ]
        : null,
      vue(),
      AutoImport({
        dts: 'src/types/auto-imports.d.ts',
        imports: [
          'vue',
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
          }
        ]
      }),
      Components({
        dts: 'src/types/components.d.ts',
        resolvers: [NaiveUiResolver()]
      })
    ]
  }
})
