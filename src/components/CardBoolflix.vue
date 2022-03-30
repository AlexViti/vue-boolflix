<template>
<div class="card">
  <info-card class="info" :card="card"/>
  <poster-img :poster-path="card.poster_path" :sizes="sizes"/>
</div>
</template>

<script>
import InfoCard from './InfoCard.vue'
import PosterImg from './PosterImg.vue'

export default {
  name: 'CardBoolflix',
  data: () => ({
    sizes: { width: 342, height: 513 }
  }),
  props: {
    card: Object,
    type: String
  },
  components: {
    PosterImg,
    InfoCard
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;

  .info {
    visibility: hidden;
    transition: visibility 0.1s;
  }

  &:hover .info{
    visibility: visible;
  }
}
</style>
