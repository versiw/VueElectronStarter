import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin, swcPlugin, loadEnv } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { rendererConfig } from './config'

export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有
  // `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd())
  console.log(env)

  return {
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
        rendererConfig.useUnpluginVueRouter
          ? VueRouter({
              routesFolder: 'src/renderer/src/views',
              extensions: ['.vue'],
              exclude: [],
              dts: 'src/renderer/src/types/typed-router.d.ts'
            })
          : undefined,
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
      ],
      define: {
        __USE_AUTO_ROUTES__: JSON.parse(JSON.stringify(env.VITE_USE_AUTO_ROUTES))
      }
    }
  }
})
