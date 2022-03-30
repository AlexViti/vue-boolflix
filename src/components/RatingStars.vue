<template>
<div>
  <span>Voto: </span>
  <font-awesome-icon v-for="i in stars" :key="i" icon="fa-solid fa-star" :style="{ color: 'yellow' }" />
  <font-awesome-layers v-if="halfStar">
    <font-awesome-icon icon="fa-solid fa-star-half" :style="{ color: 'yellow' }" />
    <font-awesome-icon icon="fa-regular fa-star" :style="{ color: 'yellow' }" />
  </font-awesome-layers>
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

<style lang="scss" scoped>
  font-awesome-icon {
    color: yellow;
  }
</style>
