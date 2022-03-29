<template>
<header>
  <img :src="logo" alt="">
</header>
</template>

<script>
import logo from '../assets/boolflix.png'

export default {
  name: 'HeaderVue',
  data () {
    return {
      logo
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
