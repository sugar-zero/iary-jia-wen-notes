import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Main.vue'),
      redirect: 'home',
      children:[
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
  ]
})

export default router
