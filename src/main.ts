import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import store from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 创建vue实例
const app = createApp(App)

// 引入tailwind css
import './assets/tailwind.css'

// 挂在pinia
app.use(store)
app.use(router)
app.use(ElementPlus)
// 挂在实例
app.mount('#app')
