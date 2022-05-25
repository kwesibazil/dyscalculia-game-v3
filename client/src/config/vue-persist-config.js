import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: (state) => ({isLoggedIn: state.isLoggedIn}),   // reducer will overwrite the persisted state with  default value  if declare inside a module :(
  filter: mutations => mutations.type == 'setAuthentication' || mutations.type =='logout'
})


const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: (state) => ({isLoggedIn: state.isLoggedIn}),   // reducer will overwrite the persisted state with  default value  if declare inside a module :(
  filter: mutations => mutations.type == 'setAuthentication' || mutations.type =='logout'
})


export {vuexSession, vuexLocal}