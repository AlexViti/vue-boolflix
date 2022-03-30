<template>
<div>
  <span>Voto: </span>
  <font-awesome-icon v-for="i in stars" :key="i" icon="fa-solid fa-star" />
  <font-awesome-icon v-if="halfStar" icon="fa-solid fa-star-half" />
  <font-awesome-icon v-for="i in emptyStars" :key="-i" icon="fa-regular fa-star" />
</div>
</template>

<script>
export default {
  name: 'RatingStars',
  props: {
    vote: Number
  },
  computed: {
    stars() {
      return parseInt(this.vote / 2)
    },
    halfStar() {
      return !!(this.vote % 2 >= 1)
    },
    emptyStars() {
      return (5 - this.stars - (this.halfStar ? 1 : 0))
    }
  }
}
</script>

<style>

</style>
