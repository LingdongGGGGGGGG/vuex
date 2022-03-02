import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
const app = createApp(App) // 生成 Vue 实例 app
app.config.productiontip=false;
app.use(store) // 引用路由实例
app.use(router)
app.mount('#app') // 挂载到 #app