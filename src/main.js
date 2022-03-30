import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Font awesome star icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStarHalf, faXmark, faMagnifyingGlass, faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
library.add(faStarHalf, faXmark, faMagnifyingGlass, fasStar, farStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
