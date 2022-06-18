import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  //reducer: state => ({isLoggedIn: state.isLoggedIn}),   // reducer will overwrite the persisted state with  default value  if declare inside a module :(
  //filter: mutation => mutation.type == 'setAuthentication' || mutation.type =='logout'
})


const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: state => ({                  // reducer will overwrite the persisted state with  default value  if declare inside a module :(
            games: state.games, 
            quizzes: state.quizzes,
            questions: state.questions, 
            testimonies: state.testimonies
          }),   
  filter: mutation => mutation.type == 'setResult' 
})


export {vuexSession, vuexLocal}