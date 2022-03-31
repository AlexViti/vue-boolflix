import Vue from 'vue'
import Vuex from 'vuex'
import FlagIcon from 'vue-flag-icon'

Vue.use(Vuex)
Vue.use(FlagIcon)

export default new Vuex.Store({
  state: {
    searchStr: ''
  },
  getters: {},
  mutations: {
    changeSearchStr(val) {
      this.searchStr = val
    }
  },
  actions: {},
  modules: {}
})
