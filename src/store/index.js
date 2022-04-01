import Vue from 'vue'
import Vuex from 'vuex'
import FlagIcon from 'vue-flag-icon'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(FlagIcon)

export default new Vuex.Store({
  state: {
    searchStr: '',
    myKey: '754f66aee850d9eccd363efa7feb7521',
    baseUrl: 'https://api.themoviedb.org/3/',
    movieCards: [],
    tvCards: []
  },
  getters: {
    getQuery(state) {
      return state.searchStr.trim().replace(/\s{1,}/g, '+')
    }
  },
  mutations: {
    changeSearchStr(state, newVal) {
      state.searchStr = newVal
    },
    deleteCards(state) {
      state.tvCards.length = 0
      state.movieCards.length = 0
    },
    addCards(state, { array, type }) {
      console.log(array, type)
      state[type + 'Cards'] = array
    }
  },
  actions: {
    fetchCards({ commit, state }, { typeOf, params }) {
      axios.get(state.baseUrl + typeOf, { params: { ...params, api_key: state.myKey } }).then(res => commit('addCards', { array: res.data.results, type: typeOf.slice(7) })).catch((res) => console.log(res))
    }
  },
  modules: {}
})
