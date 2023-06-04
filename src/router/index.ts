import { createRouter, createWebHashHistory } from 'vue-router'

import ViewNotes from '@/views/ViewNotes.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: () => import('@/views/ViewStats.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
