import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'
import { routes } from '@/router/routes'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/**
 * @summary before each route make a request to the server and retrieve login Status
 *          if user is Authenticated proceed as normal to the desired route
 *          else redirect to the landing page
 */
  router.beforeEach((to, from, next) => {
  store.dispatch('loginStatus').then(isLoggedIn => {
    if(to.meta.requiresAuth && to.name !== 'welcome' && !isLoggedIn)
      next({ name: 'welcome' })
    else if(!to.meta.requiresAuth && to.name === 'welcome' && isLoggedIn)
      next({ name: 'dashboard' })
    else
      next()
  })
})


export default router
