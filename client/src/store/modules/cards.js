import axiosInstance from "@/config/axios-config";

export default{
  state: {
    cards: []
  },
  getters: {
    getCards: state => state.cards
  },
  mutations: {
    setCards: (state, cards) =>{
      try {
        cards.forEach(card => state.cards.push(card))
      } catch (err) {
        console.log(err);
      }
    }
  },
  actions: {
    async fetchCards({commit}) {
      try {
        const res = await axiosInstance.get('dashboard/cards')
        commit('setCards', res.data)
      } catch (err) {
        console.log(err.response);
      }
    }
  }
}
