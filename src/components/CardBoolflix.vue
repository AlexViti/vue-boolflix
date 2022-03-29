<template>
<li v-if="type === 'movie'" class="card">
  {{ card.title }} <br>
  {{ card.original_title }} <br>
  {{ card.original_language }} <br>
  {{ card.vote_average }}
</li>
<li v-else class="card">
  {{ card.name }} <br>
  {{ card.original_name }} <br>
  {{ card.original_language }} <br>
  {{ card.vote_average }}
</li>
</template>

<script>
export default {
  name: 'CardBoolflix',
  props: {
    card: Object,
    type: String
  }
}
</script>

<style lang="scss" scoped>

</style>
