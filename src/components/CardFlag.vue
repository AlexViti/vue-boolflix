<template>
<div class="language">
  <span>Lingua originale:  </span>
  <flag v-if="iso" :iso="iso" :squared='false' />
  <span v-else>{{ lang }}</span>
</div>
</template>

<script>
import COUNTRIES_JSON from '../../node_modules/flag-icons/country.json'

export default {
  name: 'CardFlag',
  props: {
    lang: String
  },
  computed: {
    countries() {
      return COUNTRIES_JSON.map(country => country.code)
    },
    iso() {
      return this.isoException(this.lang)
    }
  },
  methods: {
    isoException(str) {
      switch (str) {
        case 'en':
          return 'gb'
        case 'sv':
          return 'se'
        case 'ko':
          return 'kr'
        case 'ja':
          return 'jp'
        case 'zh':
          return 'cn'
        case 'da':
          return 'dk'
        case 'hi':
          return 'in'
        case 'el':
          return 'gr'
        case 'cs':
          return 'cz'
        default:
          if (this.countries.includes(str)) return str
          else return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
