<template>
  <div class="info-card">
    <div class="title">
      <strong>Titolo:</strong> <span v-html="card.title ?  card.title: card.name"></span>
      <div v-if="card.title ? card.title !== card.original_title :  card.name !== card.original_name">
        <strong>Titolo originale:</strong> {{ card.original_title ?  card.original_title: card.original_name }}
      </div>
    </div>
  <card-flag :lang="card.original_language"/>
  <rating-stars v-if="card.vote_count > 0" :vote="card.vote_average" />
  <div class="overview" v-if="card.overview"> {{ card.overview }}</div>
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
  padding: 1rem;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #000000cc;
  display: flex;
  flex-direction: column;

  * + * {
    margin-top: 1rem;
  }

  .overview {
    overflow: hidden;
  }
}
</style>
