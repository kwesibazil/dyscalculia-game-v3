import { createApp } from 'vue'
import { vue3Debounce } from 'vue-debounce'


import App from './App.vue'
import store from './store'
import router from './router'

//dependencies & libraries  
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/hover.css/css/hover-min.css'
import '../node_modules/animate.css/animate.min.css'
import './assets/scss/custom.scss'
import './assets/css/custom.css'



createApp(App).use(store).use(router)
.directive('debounce', vue3Debounce({ lock: true })).mount('#app')
