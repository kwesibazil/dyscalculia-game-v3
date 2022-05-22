import { createStore } from 'vuex'

import toggle from './modules/toggle'
import auth from './modules/auth'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    toggle
  }
})
