import { createRouter, createWebHistory } from 'vue-router/auto'
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
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: globalConfig.webConfig.useUnpluginVueRouter
    ? await importAutoRoutes()
    : [
        {
          path: '/',
          name: 'index',
          component: () => import('@renderer/views/index.vue')
          // 导航栏配置
          // children: [
          //   {
          //     path: '/nav_index',
          //     name: 'nav_index',
          //     component: NavIndex
          //   },
          // ]
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@renderer/views/about.vue')
        },
        {
          path: '/groups',
          name: 'groups',
          component: () => import('@renderer/views/groups/index.vue'),
          children: [
            {
              path: '/groups/children1',
              name: 'children1',
              component: () => import('@renderer/views/groups/children1.vue')
            },
            {
              path: '/groups/children2',
              name: 'children2',
              component: () => import('@renderer/views/groups/children2.vue')
            }
          ]
        }
      ]
})

export default router
