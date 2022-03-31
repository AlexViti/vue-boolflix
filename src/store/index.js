import Vue from 'vue'
import Vuex from 'vuex'
import FlagIcon from 'vue-flag-icon'

Vue.use(Vuex)
Vue.use(FlagIcon)

export default new Vuex.Store({
  state: {
    searchStr: '',
    myKey: '754f66aee850d9eccd363efa7feb7521'
  },
  getters: {
    getQuery(state) {
      return state.searchStr.trim().replace(/\s{1,}/g, '+')
    }
  },
  mutations: {
    changeSearchStr(state, newVal) {
      state.searchStr = newVal
    }
  },
  actions: {},
  modules: {}
})
