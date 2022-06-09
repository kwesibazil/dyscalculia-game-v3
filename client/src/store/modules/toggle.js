export default{
  state: {
    modal: false,                                                   //controls modal toggle
    sideNav: true,                                                 //sideNav toggle
    currentModalForm: null,                                         //controls if form is displayed
    loginForm: {current: null, active: true },                      //active represents the current form is signIn
  },

  getters: {
    isVisible: state => payload => state[payload],
    isHidden: state => payload => state[payload.object][payload.property]
  },
  
  mutations: {
    resetModal (state) {
      state.modal = false
      state.currentModalForm = null
    },

    toggleModal (state, modalForm){
      state.modal = !state.modal 
      state.currentModalForm = modalForm
    },

    toggleLoginForm (state, form){
      state.loginForm.current = form
      state.loginForm.active = form === 'signIn' ? true : false
    },

    toggleSideNav (state) {
      state.sideNav = !state.sideNav
    }, 

  }
}