import router from '@/router/index'
import axiosInstance from "@/config/axios-config";

export default{
  state: {
    register: null,  
    redirectMsg: null,
    feedbackBox: { signIn: false, signUp: false }, 
    feedbackMsg: { signIn: null, signUp: null }, 
    alertDanger: { signIn: null, signUp: null }     
  },
  getters: {
    redirectMsg: state => state.redirectMsg,
    feedbackMsg: state => form => state.feedbackMsg[form],
    isLoggedIn: (state, getters, rootState) => rootState.isLoggedIn,
    isActive: state => payload => state[payload.object][payload.property]
  },
  mutations: {
    redirect(state, route){
      console.log('redirect called')
      setTimeout( _ => router.push({ name: route }) ,500)
    },
    
  
    closeAlert(state, form){
      state.feedbackBox[form] = !state.feedbackBox[form]
    },

    /**
     * @note this is total a BS Hack Find a better way to do this
     * @summary the issue at hand is that in the event the user access the
     *          application via the Sign Up route --> this will set the redirect msg
     *                  However
     *         the problem stems from that after successfully registering the user
     *         the registration action makes a calls to the login action --> this is to prevent the user from
     *         having to re-enter their credentials  once again
     *                However
     *        the login actions also makes a call to the this mutation, thus overriding the earlier msg
     *      
     *      A possible solution would be to display a generic msg that conveys both registration and login feedback to the 
     */
    setRedirectMsg(state, data){
      if(data.action === 'register'){
        state.register = true
        state.redirectMsg = data.msg
      }

      if(data.action === 'login' && !state.register)
        state.redirectMsg = data.msg

      this.state.toggle.currentModalForm = 'success'
    },

    /**
     * @description 
     *    data.form ---> this determines which form to display feedbackMsg
     *    data.feedbackMsg -----> a string return from the server            
     */
    showFeedback(state, data){                
      state.feedbackBox[data.form] = true 
      state.alertDanger[data.form] =  true
      state.feedbackMsg[data.form] = data.feedbackMsg   
    }
  },
  actions: {
    async loginStatus({commit}){
      try {
        const res = await axiosInstance.get('users/login-status')
        return res.data.isAuthenticated
      } catch (err) {
        console.log(err.response.data.err);
      }
    },

    async logout({commit}){
      try {
        const res = await axiosInstance.get('users/logout')
        await commit ('redirect', res.data.route )
      } catch (err) {
        console.log(err.response.data.err);
      }
    },

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
        await commit('setRedirectMsg', {msg: res.data.msg, action: 'register'})
        await dispatch('login', payload)
      } catch (err) {
        if(err.response && err.response.status !== 500 )
          commit('showFeedback', {feedbackMsg: err.response.data.err, form: 'signUp'})
        else
          commit('showFeedback', {feedbackMsg: 'Registration Failed. Please Try Again!', form: 'signUp'})
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
    async login({commit}, payload){
      try {
        const res = await axiosInstance.post('users/login', payload)
        await commit('setRedirectMsg', {msg: res.data.msg, action: 'login'})
        await commit('redirect', res.data.route)
      } catch (err) {
        if(err.response && err.response.status !== 500 )
          commit('showFeedback', {feedbackMsg: err.response.data.err, form: 'signIn'})
        else
          commit('showFeedback', {feedbackMsg: 'Login Failed. Please Try Again!', form: 'signIn' })
      }
    }
  }
}


// use to access state in another module console.log(this.state.<module>.<state>);