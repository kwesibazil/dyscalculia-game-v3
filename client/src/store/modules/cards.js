import axiosInstance from "@/config/axios-config";

export default{
  state: {
    progressBar:{
      endValue: 0,
      progressValue: 0,      
    },
    
    questionIndex:{
      end: 0,
      start: 1
    },
    

    games: [],
    questions: [],
    testimonies: []
  },
  getters: {
    getState: state => elem => state[elem]
  },
  
  mutations: {
    setResult(state, payload){
      payload.data.forEach(elem => state[payload.state].push(elem))
    },

    test(state, payload){
      console.log('this is the test function');
      console.log(payload);

//       var form = document.getElementById("test");
// a     lert(form.elements["test"].value);
    },



    progress(state){
      const size =  12   
      const temp =  state.progressBar.endValue
      state.progressBar.endValue =  Math.round((state.questionIndex.start / size) * 100)
      
      if(temp != 0)
        state.progressBar.progressValue =  0
      else
        state.progressBar.progressValue = temp
      
      
    },

  },

  actions: {
    async fetchTestimonies({commit}){
      try {
        const res = await axiosInstance.get('dashboard/testimonies')
        await commit('setResult', {data: res.data, state: 'testimonies'})
        
      } catch (err) {
        console.log(err.response.data.err);
      }
    },

    async fetchGame({commit}) {
      try {
        const res = await axiosInstance.get('dashboard/games')
        await commit('setResult', {data: res.data, state: 'games'})
      } catch (err) {
        console.log(err.response);
      }
    },

    async fetchQuestions({commit}){
      try {
        const res = await axiosInstance.get('screener/questions')
        await commit('setResult', {data: res.data, state: 'questions'})
      } catch (err) {
        console.log(err.response.data.err);
      }
    },
  }
}
