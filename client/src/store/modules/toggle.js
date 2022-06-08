export default{
  state: {
    overlay: false,
    modal: false,                                                  //controls modal toggle
    currentModalForm: null,                                        //controls if form is displayed
    loginForm: {current: null, active: true },                      //active represents the current form is signIn
    
    //sideNav: false,                                               //sideNav toggle
  },

  getters: {
    isVisible: state => payload => state[payload],
    getAttribute: state => payload => state[payload.object][payload.property]
  },
  
  mutations: {
    disableModal (state) {
      state.modal = false
    },

    toggleModal (state, modalForm){
      state.modal = !state.modal 
      state.currentModalForm = modalForm
    },

    toggleLoginForm (state, form){
      state.loginForm.current = form
      state.loginForm.active = form === 'signIn' ? true : false
    }


    // // toggleSideNav (state) {
     // //   state.sideNav = !state.sideNav
     // // }, 

    // // showForm(state, payload){
    // //   state.currentModalForm = payload
    // // },


  }
}