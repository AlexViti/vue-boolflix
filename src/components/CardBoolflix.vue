<template>
<li class="card">
  {{ card.title }} <br>
  {{ card.original_title }} <br>
  {{ card.original_language }} <br>
  {{ card.vote_average }}
</li>
</template>

<script>
export default {
  name: 'CardBoolflix',
  props: {
    card: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
