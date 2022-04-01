<template>
<main>
  <div v-if="query.length == 0" class="message" v-html="'Effettua una ricerca'" />
  <div v-else-if="true" class="wrapper">
    <div v-for="(type, index) in types" :key="index">
      <h2 v-if="true" v-html="index ? 'Serie tv': 'Film'" />
      <div  class="container">
        <card-boolflix v-for="card in cards[index]" :key="card.id" :card="card" :type="types[index]" />
      </div>
    </div>
  </div>
  <div v-else class="message" v-html="searching ? 'Sto cercando' : 'La ricerca non ha prodotto risultati'" />
</main>
</template>

<script>
// import axios from 'axios'
import CardBoolflix from './CardBoolflix.vue'

export default {
  name: 'MainBoolflix',
  data: () => ({
    types: ['movie', 'tv'],
    searching: false
  }),
  components: {
    CardBoolflix
  },
  computed: {
    query() {
      return this.$store.getters.getQuery
    },
    cards() {
      return [this.$store.state.movieCards, this.$store.state.tvCards]
    }
  },
  watch: {
    query: {
      handler(newVal) {
        if (newVal.length > 0) {
          this.searching = true
          this.$store.commit('deleteCards')
          for (let i = 0; i < this.types.length; i++) {
            this.$store.dispatch('fetchCards', { typeOf: `search/${this.types[i]}`, params: { query: newVal, language: 'it-IT' } })
          }
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;

  .wrapper {
    width: clamp(400px, 90%, 1600px);

    h2 {
      font-size: 6ex;
      margin: 1ex 0;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }

  .message {
    flex-grow: 1;
    font-size: 50px;
    text-align: center;
    display: grid;
    place-items: center;
  }
}
</style>
