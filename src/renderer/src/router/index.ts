import { createRouter, createWebHashHistory } from 'vue-router/auto'
import routes from '@renderer/router/routes'
import { rendererConfig } from '@config/index'

const importAutoRoutes = async () => {
  if (rendererConfig.useUnpluginVueRouter) {
    const autoRoutesModule = await import('vue-router/auto-routes')
    return autoRoutesModule.routes
  } else {
    return []
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: rendererConfig.useUnpluginVueRouter ? await importAutoRoutes() : routes
})

export default router
