import axiosInstance from "@/config/axios-config";

export default{
  state: {
  },

  getters: {
    getRootState: (state, getters, rootState) => elem => rootState[elem]
  },
  
  mutations: {
    setResult(state, payload){
      payload.data.forEach(elem => this.state[payload.state].push(elem))
    }
  },

  actions: {
    async fetchTestimonies({commit}){
      try {
        const res = await axiosInstance.get('dashboard/testimonies')
        commit('setResult', {data: res.data, state: 'testimonies'})
      } catch (err) {
        console.log(err.response.data.err);
      }
    },

    async fetchGame({commit}) {
      try {
        const res = await axiosInstance.get('dashboard/games')
        commit('setResult', {data: res.data, state: 'games'})
      } catch (err) {
        console.log(err.response);
      }
    },
  }
}
// use to access state in another module console.log(this.state.<module>.<state>);