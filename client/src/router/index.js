import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'

const routes = [
  { path: '/', name:'home', component: () => import('@/views/landing-view.vue'),},
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { requiresAuth: true },
    component: () => import('@/views/dashboard-view.vue'),

    beforeEnter: (to, from, next) => {
      if (to.meta.requiresAuth && to.name !== 'home' && store.getters.isLoggedIn)
        next()
      else
        next({ name: 'home' })
    }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
