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
    component: () => import('@/views/home/landing-page.vue'),
    beforeEnter: [removeQueryParams],
  },
  {
    path: '/', 
    name: 'home', 
    meta: { requiresAuth: true }, 
    component: () => import('@/views/home/main-layout.vue'),
    children: 
    [
      { 
        path: '/', 
        name: 'dashboard', 
        meta: { requiresAuth: true }, 
        component: () => import('@/views/home/dashboard.vue'),  
      },
      {
        path: '/screener',
        name: 'screener',
        meta: { requiresAuth: true }, 
        component: () => import('@/views/screener/screener-test.vue'),
      },
      { 
        path: '/screener-results', 
        name: 'screener-results', 
        meta: { requiresAuth: true }, 
        component: () => import('@/views/screener/screener-results.vue'),
        beforeEnter: (to, from, next) => {
          if(from.name !== 'screener')
            next({ name: 'screener' })
          else
            next()
        }
      },
      {
        path: '/games',
        name: 'games',
        meta: { requiresAuth: true }, 
        component: () => import('@/views/games/games.vue'), 
      },
      { 
        path: '/math-quiz', 
        name: 'math-quiz', 
        meta: { requiresAuth: true }, 
        component: () => import('@/views/math-quiz/math-quiz.vue'),
        
      },
      { 
        path: '/math-results', 
        name: 'math-results', 
        meta: { requiresAuth: true }, 
        component: () => import('@/views/math-quiz/math-result.vue'),
        beforeEnter: (to, from, next) => {
          if(from.name !== 'math-quiz')
            next({ name: 'math-quiz' })
          else
            next()
        }
      },
      {
        path: '/information',
        name: 'information',
        meta: { requiresAuth: true }, 
        component: () => import('@/views/dyscalculia/dyscalculia-info.vue'),
        beforeEnter: [removeQueryParams]   
      },
      {
        path: '/statistics',
        name: 'statistics',
        meta: { requiresAuth: true }, 
        component: () => import('@/views//statistics/statistics.vue'),
      },
    ]
  },
  {
    path: '/internal-error',
    name: 'internal-error',
    meta: { requiresAuth: false }, 
    component: () => import('@/views/errors/internal-server.vue'),
  },
  {
    path: '/unauthorize-access',
    name: 'unauthorize-access',
    meta: { requiresAuth: false }, 
    component: () => import('@/views/errors/unauthorize-access.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: { requiresAuth: false }, 
    component: () => import('@/views/errors/not-found.vue'),
  }
]



export { routes}