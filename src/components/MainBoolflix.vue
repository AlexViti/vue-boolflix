<template>
<main>
  <div v-if="cards.length > 0" class="wrapper">
    <ul v-for="(type, index) in types" :key="index" class="container">
      <h2>{{ type }}</h2>
      <card-boolflix v-for="card in cards[index]" :key="card.id" :card="card" :type="type" />
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
    lang: 'it_IT',
    types: ['movie', 'tv'],
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
      for (let i = 0; i < this.types.length; i++) {
        axios.get(`${this.baseUrl}${this.types[i]}?api_key=${this.key}&query=${this.query}`)
          .then(res => this.cards.push(res.data.results))
          .catch(() => console.log('error'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
