import axiosInstance from "@/config/axios-config";

export default{
  state: {
    games: [],
    testimonies: [],
  },

  getters: {
    getState: state => elem => state[elem],
  },
  
  mutations: {
    setResult(state, payload){
      payload.data.forEach(elem => state[payload.state].push(elem))
    }
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
  }
}
