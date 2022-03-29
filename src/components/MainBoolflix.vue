<template>
<main>
  <ul class="container">
    <card-boolflix v-for="card in cards" :key="card.id" :card="card" />
  </ul>
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
    lang: 'it_IT',
    type: 'movie',
    cards: []
  }),
  components: {
    CardBoolflix
  },
  props: {
    query: String
  },
  watch: {
    query: function(newVal) {
      if (newVal.length > 0) this.apiGetter()
    }
  },
  methods: {
    apiGetter() {
      axios.get(`${this.baseUrl}${this.type}?api_key=${this.key}&query=${this.query}`)
        .then(res => { this.cards = res.data.results })
        .catch(() => { console.log('error') })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
