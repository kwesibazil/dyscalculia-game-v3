import axiosInstance from "@/config/axios-config";
import DOMPurify from 'dompurify';

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
      } 
      catch {}
    },

    async logout({commit}){
      try {
        const res = await axiosInstance.get('users/logout')
        commit('redirect', {route: res.data.route, timeOut: 100}, {root: true})
      }catch (err) {
        commit('redirect', {route: res.data.route, timeOut: 600}, {root: true})
      }
    },

  
    async register({commit, dispatch}, payload){
      try {
        const pwd = DOMPurify.sanitize(payload.pwd);
        const email = DOMPurify.sanitize(payload.email);
        const res = await axiosInstance.post('users/register', {email, pwd})
        dispatch('login', payload)
      } catch (err) {
          commit('setFeedback', {feedbackMsg: err.response.data.err, form: 'signUp'})
      }
    },


    async login({commit}, payload){
      try {
        const pwd = DOMPurify.sanitize(payload.pwd);
        const email = DOMPurify.sanitize(payload.email);
        const res = await axiosInstance.post('users/login', {email, pwd})
        
        commit('setRedirectMsg', res.data.msg, {root: true})
        commit('redirect', {route: res.data.route, timeOut: 1000}, {root: true})
      }catch (err) {
        commit('setFeedback', {feedbackMsg: err.response.data.err, form: 'signIn'})
      }
    }
  }
}


// use to access state in another module console.log(this.state.<module>.<state>);