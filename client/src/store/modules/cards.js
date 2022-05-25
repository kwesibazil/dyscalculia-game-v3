import axiosInstance from "@/config/axios-config";

export default{
  state: {
    games: [],
    testimonies: []
  },
  getters: {
    getCards: state => id => state[id]
  },
  
  mutations: {
    setGames(state, games) {
      games.forEach(game => state.games.push(game))
    },
    setTestimonies(state, testimonies){
      testimonies.forEach(testimony => state.testimonies.push(testimony))
    }
  },

  actions: {
    async fetchTestimonies({commit}){
      try {
        const res = await axiosInstance.get('dashboard/testimonies')
        commit('setTestimonies', res.data)
      } catch (err) {
        console.log(err.response);
      }
    },

    async fetchGame({commit}) {
      try {
        const res = await axiosInstance.get('dashboard/games')
        commit('setGame', res.data)
      } catch (err) {
        console.log(err.response);
      }
    }
  }
}
