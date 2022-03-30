<template>
<div class="card">
  <span v-if="card.title" >
    {{ card.title }} <br>
    {{ card.original_title }} <br>
  </span>
  <span v-else>
    {{ card.name }} <br>
    {{ card.original_name }} <br>
  </span>
  <poster-img :poster-path="card.poster_path" />
  <!-- <img :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`" alt=""> -->
  <br>
  <flag v-if="iso" :iso="iso" :squared='false' />
  <span v-else>{{ card.original_language }}</span> <br>
  <rating-stars :vote="card.vote_average" />
</div>
</template>

<script>
import PosterImg from './PosterImg.vue'
import COUNTRIES_JSON from '../../node_modules/flag-icons/country.json'
import RatingStars from './RatingStars.vue'
export default {
  name: 'CardBoolflix',
  props: {
    card: Object,
    type: String
  },
  computed: {
    countries() {
      return COUNTRIES_JSON.map(country => country.code)
    },
    iso() {
      return this.isoException(this.card.original_language)
    }
  },
  methods: {
    isoException(str) {
      switch (str) {
        case 'en':
          return 'gb'
        case 'sv':
          return 'se'
        case 'ko':
          return 'kr'
        case 'ja':
          return 'jp'
        case 'zh':
          return 'cn'
        case 'da':
          return 'dk'
        case 'hi':
          return 'in'
        case 'el':
          return 'gr'
        case 'cs':
          return 'cz'
        default:
          if (this.countries.includes(str)) return str
          else return ''
      }
    }
  },
  components: {
    PosterImg,
    RatingStars
  }
}
</script>

<style lang="scss" scoped>

</style>
