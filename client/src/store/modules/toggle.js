export default{
  state: {
    modalBox: false,               //controls modal toggle
    landingModal: false              //controls landingPage modal form
  },
  getters: {
    // collapse: state => state.modalBox,
    isVisible: state => elem => state[elem]
    
  },
  mutations: {
    toggleModal (state){
      state.modalBox = !state.modalBox
      state.landingModal = !state.landingModal
    }
  },
  actions: {
  },
}