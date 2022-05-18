export default{
  state: {
    signIn: true,                               //controls the current form displayed
    modalBox: false,                             //controls modal toggle
    landingModal: false,                         //controls landingPage modal form
    inputType: {                                //controls the password field type attribute toggle {password/text}
      signIn: 'password',
      signUp: 'password'            
    },
    pwdIcon: {                                  //controls icon toggle for the password input field
      signIn: true, 
      signUp: true 
    },
  },
  getters: {
    isVisible: state => elem => state[elem],
    isHidden: state => id => state.pwdIcon[id],
    inputType: state => id => state.inputType[id]    
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
      console.log('hit');
      state.inputType[data[0]] = data[1]
      state.pwdIcon[data[0]] =  !state.pwdIcon[data[0]]
    },
  },
  actions: {
  },
}