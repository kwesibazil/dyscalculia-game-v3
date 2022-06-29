import axiosInstance from "@/config/axios-config";

export default{
  state: {
    answers: {},
    progressBar:{ endValue: 0, progressValue: 0 },
  },

  getters: {
    getEndValue: state => state.progressBar.endValue, 
  },
  
  mutations: {
    setAnswers(state, payload){
      state.answers[payload.name] = payload.value
    },
    progress(state){
      const size =  12                                    //number of questions
      const temp =  state.progressBar.endValue
      state.progressBar.progressValue =  (temp == 0) ? 0 : temp 
      state.progressBar.endValue =  Math.round((Object.keys(state.answers).length / size) * 100)
    }
  },

  actions: {
    async fetchQuestions({commit}){
      try {
        const res = await axiosInstance.get('screener/questions')
        commit('setResult', {data: res.data, state: 'questions'}, {root: true})
      } catch (err) {
        console.log(err.response.data.err);
      }
    },

    async submitQuestions({commit, state}){
      try {
        const res = await axiosInstance.post('screener/answers', state.answers)
        commit('setResults', res.data.results, {root: true})
        commit('setRedirectMsg', res.data.msg, {root: true})
        commit('toggleModal', 'success', { root: true });
        commit('redirect', {route: res.data.route, timeOut: 1000}, {root: true})
        setTimeout(_ => commit('toggleModal', null, { root: true }), 1500 )   //close modal after
      } catch (err) {
          console.log(err.response.data.err);
      }
    }
  }
}
// use to access state in another module console.log(this.state.<module>.<state>)