import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/landing-view.vue')},
  { 
    path: '/dashboard', 
    name: 'dashboard', 
    component: () => import('../views/dashboard-view.vue'),
    beforeEnter: (to, from, next) => {
      if(true){
        console.log(this.$store.state);
        next()
      }
    }
  }
  
]

// if (
//   // make sure the user is authenticated
//   !isAuthenticated &&
//   // ❗️ Avoid an infinite redirect
//   to.name !== 'Login'
// ) {
//   if(store.state.authenticated == false) {
//     next(false);
// } else {
//     next();
// }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
