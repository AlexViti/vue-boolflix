<template>
  <div id="app">
    <header-boolflix
      @set-search-input="setSearchInput" />
    <main-boolflix
      :query="searchInput.replace(/\s{1,}/g, '+')" />
  </div>
</template>

<script>
import HeaderBoolflix from './components/HeaderBoolflix.vue'
import MainBoolflix from './components/MainBoolflix.vue'

export default {
  name: 'App',
  components: {
    HeaderBoolflix,
    MainBoolflix
  },
  data: () => ({
    searchInput: ''
  }),
  methods: {
    setSearchInput(value) {
      this.searchInput = value
    }
  }
}
</script>

<style lang="scss">
// @import '../node_modules/flag-icons/sass/flag-icon.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
