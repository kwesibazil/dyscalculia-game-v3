import { createStore } from 'vuex'
import {vuexSession} from  '@/config/vue-persist-config'

import toggle from './modules/toggle'
import auth from './modules/auth'
import cards from './modules/cards'
import screener from './modules/screener'
import mathQuiz from './modules/math-quiz'

export default createStore({                        //vuex-persist reducer will override state with default value
  state: {                                         // if state is declare inside a module  
    games: [],
    quizzes: [],                             
    questions: [],
    testimonies: [],
    screenerResults:[],
    mathQuizResults:[]
  },
  getters: {
    
  },
  mutations: {
    setResults(state, results){
      state[results.name] = results
    },
  },
  actions: {
  },
  modules: {
    auth,
    cards,
    toggle,
    mathQuiz,
    screener,
  },
  //plugins:[vuexSession.plugin]
})

