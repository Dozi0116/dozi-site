import { createRouter, createWebHistory } from 'vue-router'

// alphabet order
import Top from '@/views/Top'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
