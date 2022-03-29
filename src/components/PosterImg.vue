<template>
  <img :src="path" alt="">
</template>

<script>
import placeHolder from '../assets/no-poster-available.webp'
export default {
  name: 'PosterImg',
  props: {
    posterPath: String
  },
  data: () => ({
    size: 342
  }),
  computed: {
    path() {
      if (this.posterPath) return `https://image.tmdb.org/t/p/w${this.size}/${this.posterPath}`
      else return placeHolder
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
