import axiosInstance from "@/config/axios-config";
import axios from 'axios'

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
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit('setCards', res.data)
      } catch (err) {
        console.log(err);
      }
    }
  }
}
