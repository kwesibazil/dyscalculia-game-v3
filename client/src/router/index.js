import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'
import { routes } from '@/config/router-config'



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && to.name !== 'Welcome' && !store.getters.isLoggedIn)
    next({ name: 'Welcome' })
  else if(!to.meta.requiresAuth && to.name === 'Welcome' && store.getters.isLoggedIn)
    next({ name: 'dashboard' })
  else
    next()
})


export default router
