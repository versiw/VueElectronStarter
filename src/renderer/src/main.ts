import '@renderer/assets/tailwind.css'
import 'animate.css'

import { createApp } from 'vue'
import App from '@renderer/App.vue'
import { createPinia } from 'pinia'
import { setupI18n } from '@renderer/locales'
import { setupRouter } from '@renderer/router'

console.log(
  '%cVueElectronStarter Developer Console',
  'color:#9462FF; font-size:40px; font-weight:bold;'
)

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)

app.use(createPinia())
setupI18n(app)
setupRouter(app)

app.mount('#app')
