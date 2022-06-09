import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  //reducer: state => ({isLoggedIn: state.isLoggedIn}),   // reducer will overwrite the persisted state with  default value  if declare inside a module :(
  //filter: mutation => mutation.type == 'setAuthentication' || mutation.type =='logout'
})


const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  //reducer: state => ({isLoggedIn: state.isLoggedIn}),   // reducer will overwrite the persisted state with  default value  if declare inside a module :(
  //filter: mutation => mutation.type == 'setAuthentication' || mutation.type == 'logOut'
})


export {vuexSession, vuexLocal}