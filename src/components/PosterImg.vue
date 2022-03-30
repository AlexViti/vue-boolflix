<template>
<div class="poster" :style="{ width: `${size}px` }" :class="{ 'placeholder': path == placeHolder }">
  <img :src="path" alt="">
</div>
</template>

<script>
import placeHolder from '../assets/img/no-poster-available.webp'
export default {
  name: 'PosterImg',
  props: {
    posterPath: String
  },
  data: () => ({
    size: 342,
    placeHolder
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
.poster {
  height: 513px;

  &.placeholder {
    background: #d7dae2;
    display: grid;
    place-items: center;
  }

  &:not(.placeholder) img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
