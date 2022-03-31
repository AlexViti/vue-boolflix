<template>
<main>
  <div v-if="query.length == 0" class="message" v-html="'Effettua una ricerca'" />
  <div v-else-if="movieCards.length + tvCards.length > 0" class="wrapper">
    <div v-for="(type, index) in types" :key="index">
      <h2 v-if="cards[index].length > 0" v-html="index ? 'Serie tv': 'Film'" />
      <div  class="container">
        <card-boolflix v-for="card in cards[index]" :key="card.id" :card="card" />
      </div>
    </div>
  </div>
  <div v-else class="message" v-html="searching ? 'Sto cercando' : 'La ricerca non ha prodotto risultati'" />
</main>
</template>

<script>
import axios from 'axios'
import CardBoolflix from './CardBoolflix.vue'

export default {
  name: 'MainBoolflix',
  data: () => ({
    types: ['movie', 'tv'],
    movieCards: [],
    tvCards: [],
    myKey: '754f66aee850d9eccd363efa7feb7521',
    searching: false
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
          this.searching = true
          for (let i = 0; i < this.types.length; i++) {
            axios.get(`https://api.themoviedb.org/3/search/${this.types[i]}`, {
              params: {
                api_key: this.myKey,
                query: newVal,
                language: 'it-IT'
              }
            }).then(res => { this[this.types[i] + 'Cards'] = res.data.results }).catch(() => console.log('error'))
              .then(() => { this.searching = false })
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
