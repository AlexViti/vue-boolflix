<template>
<div v-if="cast.length > 0">
  Cast:
  <span v-for="(castMember, index) in displayedCast"
    :key="castMember.id"
    v-html="castMember.name + (index == displayedCast.length - 1 ? '...' : ', ')"
  />
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CastInfo',
  props: {
    id: Number,
    type: String
  },
  data: () => ({
    creditPath: 'https://api.themoviedb.org/3/',
    cast: []
  }),
  computed: {
    displayedCast() {
      return this.cast.slice(0, 5)
    }
  },
  created() {
    axios
      .get(this.creditPath + this.type + '/' + this.id + '/credits?api_key=' + this.$store.state.myKey)
      .then(res => { this.cast = res.data.cast }).catch(() => console.log('error'))
  }
}
</script>
