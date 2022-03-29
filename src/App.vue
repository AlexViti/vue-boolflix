<template>
  <div id="app">
    <header-boolflix
      @set-search-input="setSearchInput" />
    <main-boolflix
      :search-input="searchInput" />
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
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
