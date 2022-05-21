import axiosInstance from "@/helpers/axios-config";

export default{
  state: {       
    isAuthenticated: false,
    feedback: { signIn: false, signUp: false }, 
    feedbackMsg: { signIn: null, signUp: null }, 
    alertSuccess: { signIn: false, signUp: false }     
  },
  getters: {
    feedback: state => id => state.feedback[id],
    feedbackMsg: state => id => state.feedbackMsg[id],
    alertSuccess: state => id => state.alertSuccess[id]
  },
  mutations: {
    closeAlert(state, form){
      state.feedback[form] = false
    },

    setAuthentication(state, status){
      state.isAuthenticated = status
      console.log('authentication status is ' + status);
      // router.replace({ name: "secure" })
    },

    showFeedback(state, data){                     
      state.feedback[data.form] = true 
      state.feedbackMsg[data.form] = data.feedbackMsg   
      state.alertSuccess[data.form] = (data.bootStrap === 'alert-success') ? true : false
    }
  },
  actions: {
    async register({commit}, payload){
      try {
        const res = await axiosInstance.post('users/register', payload)
        commit('showFeedback', {feedbackMsg: res.data.msg, form: 'signUp', bootStrap: 'alert-success'})
      } catch (err) {
        if(err.response && err.response.status !== 500 )
          commit('showFeedback', {feedbackMsg: err.response.data.err, form: 'signUp', bootStrap: 'alert-danger'})
        else
          commit('showFeedback', {feedbackMsg: 'Registration Failed. Please Try Again!', form: 'signUp', bootStrap: 'alert-danger'})
      }
    },

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
    }
  }
}