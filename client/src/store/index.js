import { createStore } from 'vuex'
import {vuexSession} from  '@/config/vue-persist-config'

import toggle from './modules/toggle'
import auth from './modules/auth'
import cards from './modules/cards'


export default createStore({
  state: {                                    //vuex-persist reducer will override state with default value
    isLoggedIn: false,                        // if state is declare inside a module                      
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
    toggle
  },
  plugins:[vuexSession.plugin]
})

