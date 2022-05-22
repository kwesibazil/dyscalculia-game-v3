import axiosInstance from "@/helpers/axios-config";
import router from '@/router/index'
// use to access state in another module console.log(this.state.<module>.<state>);


export default{
  state: {       
    isAuthenticated: false,
    feedback: { signIn: false, signUp: false }, 
    feedbackMsg: { signIn: null, signUp: null }, 
    alertSuccess: { signIn: false, signUp: false }     
  },
  getters: {
    feedback: state => id => state.feedback[id],
    isLoggedIn: state => state.isAuthenticated,
    feedbackMsg: state => id => state.feedbackMsg[id],
    alertSuccess: state => id => state.alertSuccess[id]
  },
  mutations: {
    closeAlert(state, form){
      state.feedback[form] = false
    },

    setAuthentication(state, status){
      state.isAuthenticated = status
      router.push({ name: 'dashboard' })
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
     *  @route  'users/register
     *  @summary registers users and if successful dispatch login action
     *  @description 
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
     *  @route  'users/login
     *  @summary login and redirect user to dashboard if successfully authenticated 
     *  @description 
     *      sends a post request to the server endpoint using an axiosInstance ---> check @/helpers/axios-config for config settings
    *        if login was successful,
    *           pass authentication status return from server to the setAuthentication mutations for further action
    *        else
    *          user will be provided with an appropriate feedback msg
     */
    async login({commit}, payload){
      try {
        const res = await axiosInstance.post('users/login', payload)
        commit('setAuthentication', res.data.isAuthenticated)
      } catch (err) {
        if(err.response && err.response.status !== 500 )
          commit('showFeedback', {feedbackMsg: err.response.data.err, form: 'signIn', bootStrap: 'alert-danger'})
        else
          commit('showFeedback', {feedbackMsg: 'Login Failed. Please Try Again!', form: 'signIn', bootStrap: 'alert-danger'})
      }
    },

    /** 
     * @todo implement logout feature
    */
    async logout({commit}){
      console.log('todo --> logout user');
    }
  }
}