<template>
  <div class="info-card">
    <span v-if="card.title" >
    {{ card.title }} <br>
    {{ card.original_title }} <br>
  </span>
  <span v-else>
    {{ card.name }} <br>
    {{ card.original_name }} <br>
  </span>
  <br>
  <card-flag :lang="card.original_language"/>
  <br>
  <rating-stars v-if="card.vote_count > 0" :vote="card.vote_average" />
  </div>
</template>

<script>
import CardFlag from './CardFlag.vue'
import RatingStars from './RatingStars.vue'
export default {
  name: 'InfoCard',
  props: {
    card: Object
  },
  components: {
    RatingStars,
    CardFlag
  }
}
</script>

<style lang="scss" scoped>
.info-card {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #000000cc ;
}
</style>
