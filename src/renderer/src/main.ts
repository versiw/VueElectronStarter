import '@renderer/assets/tailwind.css'
import 'animate.css'

import { createApp } from 'vue'
import App from '@renderer/App.vue'
import router from '@renderer/router/index'
import { createPinia } from 'pinia'
import { setupI18n } from '@renderer/locales'

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
app.use(router)
app.mount('#app', true)
