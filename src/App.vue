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
@import './assets/styles/style.scss';

#app {
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
