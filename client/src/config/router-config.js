const removeQueryParams = to => {
  if(Object.keys(to.query).length)
    return {path: to.path, query: {}, hash: to.hash}
}

const removeHash = to => {
  if(to.hash) 
    return { path: to.path, query: to.query, hash: '' }
}


const routes = [
  { 
    path: '/welcome', 
    name: 'Welcome', 
    meta: { requiresAuth: false }, 
    component: () => import('@/views/layouts/welcome-layout.vue'),
    beforeEnter: [removeQueryParams]
  },
  {
    path: '/', 
    name: 'Home', 
    meta: { requiresAuth: true }, 
    component: () => import('@/views/layouts/main-layout.vue'),
    children: 
    [
      { 
        path: '/', 
        name: 'dashboard', 
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/dashboard-layout.vue'),
        beforeEnter: [removeQueryParams]        
      },
      {
        path: '/screener',
        name: 'screener',
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/screener-layout.vue'),
        beforeEnter: [removeQueryParams]   
      },
      {
        path: '/practice',
        name: 'practice',
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/practice-layout.vue'),
        beforeEnter: [removeQueryParams]   
      },
      {
        path: '/information',
        name: 'information',
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/information-layout.vue'),
        beforeEnter: [removeQueryParams]   
      },
      {
        path: '/statistics',
        name: 'statistics',
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/statistics-layout.vue'),
        beforeEnter: [removeQueryParams]   
      },
    ]
  },
]



export { routes}