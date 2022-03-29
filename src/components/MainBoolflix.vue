<template>
<main>
  <div v-if="cards.length == 0">La ricerca non ha prodotto risultati</div>
</main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MainBoolflix',
  data: () => ({
    baseUrl: '',
    cards: []
  }),
  props: {
    searchInput: String
  },
  created() {
    if (this.searchInput.length > 0) { this.apiGetter() }
  },
  methods: {
    apiGetter() {
      axios.get('https://api.themoviedb.org/3/movie/550?api_key=754f66aee850d9eccd363efa7feb7521')
        .then(response => console.log(response))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
