import axiosInstance from "@/config/axios-config";

export default{
  state: {
    showAlert: false,
    tempAnswer: {},
    quizAnswers: {},
    quiz: {index: 0, length: null},
    btn:{submit: false, cancel: true,},
    completed:{mentalMath: null, mathFluency: null, appliedProblems: null,}
  },

  getters: {
    showQuizErr: state => state.showAlert,
    getQuizValue: state => payload => state[payload.object][payload.property]
  },
  
  mutations: {

    /* reset value in lifecycle hook beforeUnmount */
    resetQuizValues(state){
      console.log('reset quiz value called');
      state.quiz.index = 0
      state.btn.submit = true
      state.btn.submit = false
      state.tempAnswer = {}
      state.showAlert = false
      state.completed.mentalMath = null
      state.completed.mathFluency = null
      state.completed.appliedProblems = null
    },


    setQuizLength(state, length){
      state.quiz.length = length
    },

    setQuizAnswers(state, payload){
      state.tempAnswer = payload
    },


    updateAptitudeProgressBar(state, payload){
      state[payload.object][payload.property] = payload.value
    },

    updateQuizIndex(state, payload){
      if( (payload == 'next') && (Object.keys(state.tempAnswer).length !== 0)) {
        state.quiz.index++
        state.showAlert = state.btn.cancel = false
        state.btn.submit = (state.quiz.index+1 == state.quiz.length) ? true : false
        state.quizAnswers[state.tempAnswer.name] = state.tempAnswer.value
        state.tempAnswer = {}
        return
      }

      if( (payload == 'next') && (Object.keys(state.tempAnswer).length === 0)){
        state.showAlert = true
      }
      else {
        state.quiz.index--
        state.tempAnswer = {}
        state.btn.submit = false
        state.submit = state.showAlert = false

        if(state.quiz.index == 0)
          state.btn.cancel = true
      }
    }

  },

  actions: {
    async fetchQuiz({commit}){
      try {
        const res = await axiosInstance.get('math-quiz/quiz')
        commit('setQuizLength', res.data.length)
        commit('setResult', {data: res.data, state: 'quizzes'}, {root: true})
      } catch (err) {
        console.log(err.response.data.err);
      }
    },


    async submitQuiz({commit, state}){
      try {
        const res = await axiosInstance.post('math-quiz/answers', state.quizAnswers)
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
//state.quiz.index = (payload == 'next') ? state.quiz.index++ : state.quiz.index--
//👉️