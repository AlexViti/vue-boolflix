<template>
<header>
  <h1><img :src="logo" alt="Boolflix"></h1>
  <form action="/" method="GET">
    <button type='submit' @click.prevent="setSearch" class="btn-search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
    <input v-model="searchInput"
      @keyup.enter="setSearch"
      type="text" name="search" id="search"
      placeholder="Titoli, persone, generi"
      autocomplete="off"
    />
    <button @click.prevent="searchInput = ''; setSearch()" :class="{ hide: !searchInput }" class="btn-delete"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
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
  padding: .8rem 1.5rem;

  display: flex;
  align-items: center;

  img {
    height: 3rem;
    transform: translateY(.2rem);
    margin-right: 1rem;
  }

  form {
    margin-left: auto;

    display: flex;
    flex-direction: row;

    input {
      color: inherit;
      width: 100%;
      padding: .6em 2.5em;
      background-color: black;
      border: 1px solid white;
      outline: white;
    }

    button {
      @include button-reset;
      z-index: 1;

      transition: opacity 0.4s;

      &.btn-search {
        margin-right: -1.5em;
      }

      &.btn-delete {
        margin-left: -1.5em;
      }

      &.hide {
        z-index: -1;
        opacity: 0;
      }
    }
  }
}
</style>
