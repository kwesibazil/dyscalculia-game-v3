import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'home', component: () => import('../views/landing-view.vue')},
  { path: '/dashboard', name: 'dashboard', component: () => import('../views/dashboard-view.vue')}
  //{ path: '/signin', name: 'signin', component: () => import('../views/signin.vue')}
  // { path: '/signup', name: 'signup', component: () => import('../views/signup.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
