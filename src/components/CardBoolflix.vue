<template>
<li class="card">
  <span v-if="type === 'movie'" >
    {{ card.title }} <br>
    {{ card.original_title }} <br>
  </span>
<span v-else></span>
  <flag :iso="iso" /> <br>
  {{ card.vote_average }}
</li>
</template>

<script>
export default {
  name: 'CardBoolflix',
  props: {
    card: Object,
    type: String
  },
  computed: {
    iso() {
      if (this.card.original_language === 'en') return 'gb'
      else if (this.card.original_language === 'sv') return 'se'
      else return this.card.original_language
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
