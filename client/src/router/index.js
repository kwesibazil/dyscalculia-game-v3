import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'home', component: () => import('../views/LandingView.vue')},
  { path: '/signin', name: 'signin', component: () => import('../views/SignIn.vue')},
  { path: '/signup', name: 'signup', component: () => import('../views/SignUp.vue')},
  { path: '/dashboard', name: 'dashboard', component: () => import('../views/DashboardView.vue')}, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
