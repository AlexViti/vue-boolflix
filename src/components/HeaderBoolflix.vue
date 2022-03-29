<template>
<header>
  <img :src="logo" alt="">
  <input v-model="searchInput" @keyup.enter="setSearch" type="text" name="search" id="search">
  <button @click="setSearch">Search</button>
</header>
</template>

<script>
import logo from '../assets/boolflix.png'

export default {
  name: 'HeaderBoolflix',
  data: () => ({
    logo,
    searchInput: ''
  }),
  methods: {
    setSearch() {
      this.$emit('set-search-input', this.searchInput)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
