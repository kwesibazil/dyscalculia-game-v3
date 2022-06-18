import { createStore } from 'vuex'
import {vuexSession} from  '@/config/vue-persist-config'

import toggle from './modules/toggle'
import auth from './modules/auth'
import cards from './modules/cards'
import assessments from './modules/assessments'

export default createStore({                        //vuex-persist reducer will override state with default value
  state: {                                         // if state is declare inside a module  
    games: [],
    quizzes: [],                             
    questions: [],
    testimonies: [],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    cards,
    toggle,
    assessments
  },
  plugins:[vuexSession.plugin]
})

