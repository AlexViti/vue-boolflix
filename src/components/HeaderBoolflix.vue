<template>
<header>
  <h1><img :src="logo" alt="Boolflix"></h1>
  <form action="/" method="GET">
    <button type='submit' @click.prevent="setSearch"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
    <input v-model="searchInput" @keyup.enter="setSearch" type="text" name="search" id="search" placeholder="Titoli, persone, generi">
  </form>
</header>
</template>

<script>
import logo from '../assets/img/boolflix.png'

export default {
  name: 'HeaderBoolflix',
  data: () => ({
    logo,
    searchInput: ''
  }),
  methods: {
    setSearch() {
      this.$emit('set-search-input', this.searchInput.trim())
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/reset';

header {
  padding: 1rem;

  display: flex;
  align-items: center;

  form {
    margin-left: auto;

    display: flex;
    flex-direction: row;

    color: white;

    input {
      color: inherit;
      width: 100%;
      padding: 1em 1em 1em 3em;
      background-color: black;
      border: 1px solid white;
      outline: white;
    }

    button {
      color: white;
      @include button-reset;
      margin-right: -30px;
      z-index: 1;
    }
  }
}
</style>
