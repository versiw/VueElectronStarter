import { createRouter, createWebHistory } from 'vue-router'
// import { routes } from 'vue-router/auto-routes'
import Index from '@renderer/views/index.vue'
// import NavIndex from '@renderer/views/nav/nav_index.vue'
import globalConfig from '@config/index'

const importAutoRoutes = async () => {
  if (globalConfig.webConfig.useUnpluginVueRouter) {
    const autoRoutesModule = await import('vue-router/auto-routes')
    return autoRoutesModule.routes
  } else {
    return []
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: globalConfig.webConfig.useUnpluginVueRouter
    ? await importAutoRoutes()
    : [
        {
          path: '/',
          name: 'index',
          component: Index
          // 导航栏配置
          // children: [
          //   {
          //     path: '/nav_index',
          //     name: 'nav_index',
          //     component: NavIndex
          //   },
          // ]
        }
      ]
})

export default router
