<template>
<div v-if="cast.length > 0">
  Cast:
  <span v-for="castMember in displayedCast" :key="castMember.id">{{ castMember.name }}, </span>
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
      .then(res => { this.cast = res.data.cast })
  }
}
</script>
