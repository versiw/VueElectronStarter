import '@renderer/assets/tailwind.css'

import { createApp } from 'vue'
import App from '@renderer/App.vue'
import router from '@renderer/router/index'

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

createApp(App).use(router).mount('#app', true)
