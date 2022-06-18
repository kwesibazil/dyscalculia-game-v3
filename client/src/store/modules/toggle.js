import router from '@/router/index'

export default{
  state: {
    modal: false,                                                   //controls modal toggle
    sideNav: true,                                                 //sideNav toggle
    currentModalForm: null,                                         //controls if form is displayed
    loginForm: {current: null, active: true },                      //active represents the current form is signIn
    redirectMsg: {primary: null, secondary: null}
  },

  getters: {
    isVisible: state => payload => state[payload],
    redirectMsg: state => payload => state.redirectMsg[payload],
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

    async redirect(state, payload){
      setTimeout(_ => router.push({name:payload.route}), payload.timeOut)
      
      if(payload.route === 'dashboard')
        this.state.toggle.currentModalForm = 'success'
    },


    setRedirectMsg(state, msg){
      state.redirectMsg.primary = msg.primaryMsg
      state.redirectMsg.secondary = msg.secondaryMsg
    }
  }
}

// use to access state in another module console.log(this.state.<module>.<state>);