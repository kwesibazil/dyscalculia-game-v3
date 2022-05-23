import { createStore } from 'vuex'
import router from '@/router/index'
import VuexPersistence from 'vuex-persist'

import toggle from './modules/toggle'
import auth from './modules/auth'
import cards from './modules/cards'


const vuexLocal = new VuexPersistence({
  storage: window.localStorage,    
  reducer: (state) => ({isLoggedIn: state.isLoggedIn}),   // reducer will overwrite the persisted state with  default value  if declare inside a module :(
  filter: mutations => mutations.type == 'setAuthentication' || mutations.type =='logout'
})

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: state => ({todo: state.auth.feedbackMsg}),
})


export default createStore({
  state: {
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  },
  mutations: {
    setAuthentication(state, status){
      state.isLoggedIn = status
      router.push({ name: 'dashboard' }) 
    },
    userLogout(state, status){
      state.isLoggedIn = status
      router.push({ name: 'home' }) 
    }
  },
  actions: {
  },
  modules: {
    auth,
    cards,
    toggle
  },
  plugins:[vuexLocal.plugin, vuexSession.plugin]
})
