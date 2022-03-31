<template>
<div class="card">
  <info-card class="info" :card="card"/>
  <poster-img :poster-path="card.poster_path" :sizes="sizes" />
  <h2 v-if="!card.poster_path" class="title" v-html="card.title ? card.title: card.name" />
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
  transition: transform 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  .info {
    visibility: hidden;
    transition: visibility 0.1s;
  }

  &:hover .info{
    visibility: visible;
  }

  .title {
    padding: 1rem;
    font-size: 25px;
    position: absolute;
    color: #000000;
    width: 100%;
    text-align: center;
    bottom: 1rem;
  }
}
</style>
