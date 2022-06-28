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
        const res = await axiosInstance.get('games/testimonies')
        commit('setResult', {data: res.data, state: 'testimonies'})
      } catch (err) {
        commit('redirect', {route: 'internal-error', timeOut: 0}, {root: true})
      }
    },

    async fetchGame({commit}) {
      try {
        const res = await axiosInstance.get('games/games-info')
        commit('setResult', {data: res.data, state: 'games'})
      } catch (err) {
        commit('redirect', {route: 'internal-error', timeOut: 0}, {root: true})
      }
    },
  }
}
// use to access state in another module console.log(this.state.<module>.<state>);

