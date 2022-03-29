<template>
<main>
  <div v-if="movieCards.length + tvCards.length > 0" class="wrapper">
    <ul v-for="(type, index) in types" :key="index" class="container">
      <h2>{{ type }}</h2>
      <card-boolflix v-for="card in cards[index]" :key="card.id" :card="card" />
    </ul>
  </div>
</main>
</template>

<script>
import axios from 'axios'
import CardBoolflix from './CardBoolflix.vue'

export default {
  name: 'MainBoolflix',
  data: () => ({
    baseUrl: 'https://api.themoviedb.org/3/search/',
    key: '754f66aee850d9eccd363efa7feb7521',
    types: ['movie', 'tv'],
    movieCards: [],
    tvCards: []
  }),
  components: {
    CardBoolflix
  },
  props: {
    query: String
  },
  computed: {
    cards() {
      return [this.movieCards, this.tvCards]
    }
  },
  watch: {
    query: {
      handler(newVal) {
        if (newVal.length > 0) {
          this.movieCards = []
          this.tvCards = []
          for (let i = 0; i < this.types.length; i++) {
            axios.get(`${this.baseUrl}${this.types[i]}?api_key=${this.key}&query=${newVal}`)
              .then(res => { this[this.types[i] + 'Cards'] = res.data.results })
              .catch(() => console.log('error'))
          }
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
