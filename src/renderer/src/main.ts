// import './assets/main.css'

import { createApp } from 'vue'
import App from '@renderer/App.vue'
import router from '@renderer/router/index'

createApp(App).use(router).mount('#app')
