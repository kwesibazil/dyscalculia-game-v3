export default{
  state: {       
    signIn: true,                                                 //controls the current form displayed
    modalBox: true,                                               //controls modal toggle
    landingModal: true,                                           //controls landingPage modal form
    pwdIcon: { signIn: true, signUp: true },                      //controls icon toggle for the password input field
    inputType: {signIn: 'password', signUp: 'password'},          //controls the password field type attribute toggle {password/text}
  },

  getters: {
    isVisible: state => elem => state[elem],
    isHidden: state => id => state.pwdIcon[id],
    inputType: state => id => state.inputType[id],
  },
  
  mutations: {
    toggleModal (state, form){
      state.modalBox = !state.modalBox
      state.landingModal = !state.landingModal
      state.signIn = (form === 'signIn') ? true : false
    },

    toggleForm(state, form){
      state.signIn = (form === 'signIn') ? true : false
    },

    toggleInputType(state, data){
      state.inputType[data[0]] = data[1]
      state.pwdIcon[data[0]] =  !state.pwdIcon[data[0]]
    },
  }
}