import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')      
    },
    {
      path: '/diagnosticar',
      name: 'diagnostricar',
      component: () => import('../views/FormView.vue')  
    }
  ]
})

export default router
