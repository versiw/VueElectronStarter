import { createRouter, createWebHistory } from 'vue-router/auto'
import globalConfig from '@config/index'
import routes from '@renderer/router/routes'

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
  routes: globalConfig.webConfig.useUnpluginVueRouter ? await importAutoRoutes() : routes
})

export default router
