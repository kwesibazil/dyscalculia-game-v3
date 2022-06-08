import router from '@/router/index'
import axiosInstance from "@/config/axios-config";

export default{
  state: {   
    feedback: { signIn: false, signUp: false }, 
    feedbackMsg: { signIn: null, signUp: null }, 
    alertSuccess: { signIn: false, signUp: false }     
  },
  getters: {
    feedback: state => id => state.feedback[id],
    feedbackMsg: state => id => state.feedbackMsg[id],
    alertSuccess: state => id => state.alertSuccess[id],
    isLoggedIn: (state, getters, rootState) => rootState.isLoggedIn
  },
  mutations: {
    setAuthentication(state, payload){
      payload.rootState.isLoggedIn = payload.status
      //router.push({ name: 'dashboard' }) 
    },
    userLogout(state, status, rootState){
      rootState.isLoggedIn = status
      //router.push({ name: 'welcome' }) 
    },
    logout(state){
      state.isAuthenticated = !state.isAuthenticated
      console.log(`this is logout ${state.isAuthenticated}`);
    },
    closeAlert(state, form){
      state.feedback[form] = false
    },
    /**
     * @description 
     *    data.form ---> this determines which form to display feedbackMsg
     *    data.feedbackMsg -----> a string return from the server
     *    data.bootStrap --> this is a bootstrap class that determine the appropriate css styling 
     *                      depending on the status code return from the server             
     */
    showFeedback(state, data){                
      state.feedback[data.form] = true 
      state.feedbackMsg[data.form] = data.feedbackMsg   
      state.alertSuccess[data.form] = (data.bootStrap === 'alert-success') ? true : false
    }
  },
  actions: {
    /**
     * @returns  http status code (409 || 201) and json msg  [msg] if success || [err] if unsuccessful}
     * @route  'users/register
     * @summary registers users and if successful dispatch login action
     * @description 
     *      sends a post request to the server endpoint using an axiosInstance ---> check @/helpers/axios-config for config settings
    *        if registration was successful,
    *           dispatch the login action with the payload, so that the user will be redirected to the dashboard  
    *        else
    *          the user will be ask to provide a different email        
     */
    async register({commit, dispatch}, payload){
      try {
        const res = await axiosInstance.post('users/register', payload)
        await commit('showFeedback', {feedbackMsg: res.data.msg, form: 'signUp', bootStrap: 'alert-success'})
        await dispatch('login', payload)
      } catch (err) {
        if(err.response && err.response.status !== 500 )
          commit('showFeedback', {feedbackMsg: err.response.data.err, form: 'signUp', bootStrap: 'alert-danger'})
        else
          commit('showFeedback', {feedbackMsg: 'Registration Failed. Please Try Again!', form: 'signUp', bootStrap: 'alert-danger'})
      }
    },


    /**
     * @returns  http status code (409 || 201) and json msg  [msg] if success || [err] if unsuccessful}
     * @route  'users/login
     * @summary login and redirect user to dashboard if successfully authenticated 
     * @description 
     *      sends a post request to the server endpoint using an axiosInstance ---> check @/helpers/axios-config for config settings
    *        if login was successful,
    *           pass authentication status return from server to the setAuthentication mutations for further action
    *        else
    *          user will be provided with an appropriate feedback msg
     */
    async login({commit, rootState}, payload){
      try {
        const res = await axiosInstance.post('users/login', payload)
        commit('setAuthentication', {status: res.data.isAuthenticated, rootState})     //mutation in store/index.js <rootState>
      } catch (err) {
        console.log(err);
        if(err.response && err.response.status !== 500 )
          commit('showFeedback', {feedbackMsg: err.response.data.err, form: 'signIn', bootStrap: 'alert-danger'})
        else
          commit('showFeedback', {feedbackMsg: 'Login Failed. Please Try Again!', form: 'signIn', bootStrap: 'alert-danger'})
      }
    },

    async logout({commit}){
      console.log('todo --> logout user');
    }
  }
}


// use to access state in another module console.log(this.state.<module>.<state>);