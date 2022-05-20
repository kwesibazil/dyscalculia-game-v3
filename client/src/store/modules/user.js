import axiosInstance from "@/helpers/axios-config";

export default{
  state: {       
    isAuthenticated: false,
    feedback: { signIn: false, signUp: false },    
    alertSuccess: { signIn: false, signUp: false }     
  },
  getters: {
    feedback: state => id => state.feedback[id],
    alertSuccess: state => id => state.alertSuccess[id]
  },
  mutations: {
    closeAlert(state, form){
      state.feedback[form] = false
    },

    setAuthentication(state, status){
      state.isAuthenticated = status
      // router.replace({ name: "secure" })
    },

    showFeedback(state, payload){                     //payload = [0 = <signIn/signUp>,  1 = <true/false>]
      state.feedback[payload[0]] = true 
      state.alertSuccess[payload[0]] = payload[1]   
    }
  },
  actions: {
    register({commit}, payload){
      return axiosInstance.post('/users/register', payload)
        .then(res => {
          commit('showFeedback', ['signUp', true])
          return {msg:res.data.msg, err: false}
        })
        .catch(err => {
          commit('showFeedback', ['signUp', false])
          if(err.response)
            return {msg:err.response.data.err, err:true}
          else                        
            return{msg:'Registration Failed. Try Again!', err:true}
        })
    },

    login({commit}, payload){
      return axiosInstance.post('/users/login', payload)
        .then(res => {
          console.log(res.data);
          commit('setAuthentication', res.data.isAuthenticated)
        })
        .catch(err => {
          commit('showFeedback', ['signIn', false])
          if(err.response)
            return {msg:err.response.data.err, err:true}
          else                        
            return{msg:'Login Failed. Try Again!', err:true}
        })
    }
  }
}