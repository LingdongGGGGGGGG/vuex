import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/index.vue'
import V1 from '@/views/v1.vue'
import V2 from '@/views/v2.vue'
const router = createRouter({
    history: createWebHashHistory(), // hash 模式
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/v1',
            component: V1
        },
        {
            path: '/v2',
            component: V2
        }
    ]
})
export default router