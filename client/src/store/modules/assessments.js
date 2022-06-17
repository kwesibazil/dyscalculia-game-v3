import axiosInstance from "@/config/axios-config";

export default{
  state: {
    answers: {},
    questions: [],
    testResult: {},
    submitBtn: false,
    progressBar:{ endValue: 0, progressValue: 0 },
  },

  getters: {
    showSubmitBtn: state => state.submitBtn,
    getQuestion: state => elem => state[elem],
    getEndValue: state => state.progressBar.endValue
  },
  
  mutations: {
    setResponse(state, payload){
      payload.data.forEach(elem => state[payload.state].push(elem))
    },
    setAnswers(state, payload){
      state.answers[payload.name] = payload.value
    },
    setTestResults(state, results){
      state.testResult = results
    },
    progress(state){
      const size =  12                                    //number of questions
      const temp =  state.progressBar.endValue
      const length =  Object.keys(state.answers).length
      state.progressBar.progressValue =  (temp == 0) ? 0 : temp 
      state.progressBar.endValue =  Math.round((length / size) * 100)

      if(length == 12)
        state.submitBtn = !state.submitBtn
    }
    
  },

  actions: {
    async fetchQuestions({commit}){
      try {
        const res = await axiosInstance.get('screener/questions')
        await commit('setResponse', {data: res.data, state: 'questions'})
      } catch (err) {
        console.log(err.response.data.err);
      }
    },
    async screenerResult({commit, state}){
      try {
        const res = await axiosInstance.post('screener/answers', state.answers)
        console.log(res.data)
        await commit('setTestResults', res.data.results)
        await commit('toggleModal', 'success', { root: true });
        await commit('redirect', res.data.route, { root: true });
      } catch (err) {
          console.log(err.response.data.err);
      }
    }
  }
}
