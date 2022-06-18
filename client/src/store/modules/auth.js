import axiosInstance from "@/config/axios-config";

export default{
  state: {
    feedbackBox: { signIn: false, signUp: false }, 
    feedbackMsg: { signIn: null, signUp: null }, 
    alertDanger: { signIn: null, signUp: null }     
  },
  getters: {
    feedbackMsg: state => form => state.feedbackMsg[form],
    showFeedback: state => payload => state[payload.object][payload.property]
  },
  mutations: {
    closeAlert(state, form){
      state.feedbackBox[form] = !state.feedbackBox[form]
    },

    setFeedback(state, data){                
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
        commit('redirect', {route: res.data.route, timeOut: 100}, {root: true})
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
        dispatch('login', payload)
      } catch (err) {
        if(err.response && err.response.status !== 500 )
          commit('setFeedback', {feedbackMsg: err.response.data.err, form: 'signUp'})
        else
          commit('setFeedback', {feedbackMsg: 'Registration Failed. Please Try Again!', form: 'signUp'})
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
        commit('setRedirectMsg', res.data.msg, {root: true})
        commit('redirect', {route: res.data.route, timeOut: 600}, {root: true})
      } catch (err) {
        if(err.response && err.response.status !== 500 )
          commit('setFeedback', {feedbackMsg: err.response.data.err, form: 'signIn'})
        else
          commit('setFeedback', {feedbackMsg: 'Login Failed. Please Try Again!', form: 'signIn'})
      }
    }
  }
}


// use to access state in another module console.log(this.state.<module>.<state>);