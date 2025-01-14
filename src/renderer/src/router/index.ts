import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import commRoutes from '@renderer/router/routes'
// import { routes as autoRoutes } from 'vue-router/auto-routes'
import { rendererConfig } from '@config/index'

const importAutoRoutes = async () => {
  if (__USE_AUTO_ROUTES__) {
    const module = await import('vue-router/auto-routes')
    console.log('routes', module.routes)
    return module.routes
  } else {
    return []
  }
}

console.log(import.meta.env.VITE_USE_AUTO_ROUTES)

window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault()
})

const router = createRouter({
  history: createWebHashHistory(),
  routes: __USE_AUTO_ROUTES__ ? await importAutoRoutes() : commRoutes
})

export const setupRouter = (app: App) => {
  app.use(router)
}
