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
    name: 'welcome', 
    meta: { requiresAuth: false }, 
    component: () => import('@/views/layouts/welcome-layout.vue'),
    beforeEnter: [removeQueryParams],
  },
  {
    path: '/', 
    name: 'home', 
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
        component: () => import('@/views/layouts/screener/screener-layout.vue'),
        beforeEnter: [removeQueryParams]   
      },
      { 
        path: '/screener-test', 
        name: 'screener-test', 
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/screener/screener-test.vue'),
        beforeEnter: [removeQueryParams],
      },
      
      { 
        path: '/screener-results', 
        name: 'screener-results', 
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/screener/screener-results.vue'),
        beforeEnter: [removeQueryParams],
      },
      {
        path: '/practice',
        name: 'practice',
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/practice/practice-layout.vue'),
        beforeEnter: [removeQueryParams]   
      },
      { 
        path: '/math-quiz', 
        name: '/math-quiz', 
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/math-quiz/math-quiz-layout.vue'),
        beforeEnter: [removeQueryParams],
      },
      { 
        path: '/math-results', 
        name: 'math-results', 
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/math-quiz/math-result.vue'),
      },
      {
        path: '/information',
        name: 'information',
        meta: { requiresAuth: true }, 
        component: () => import('@/views/layouts/information/information-layout.vue'),
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