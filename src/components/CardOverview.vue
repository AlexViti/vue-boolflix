<template>
<div>
  <div class="overview" :id="'id' + id" v-show="lines <= maxLines" :style="{ '--max-lines': maxLines }" v-html="overview" />
  <div class="overflow" v-show="lines > maxLines" :style="{ '--max-lines': maxLines }" v-html="overview" />
  <span v-if="lines > maxLines">...</span>
</div>
</template>

<script>
export default {
  name: 'CardOverview',
  props: {
    overview: String,
    id: Number
  },
  data: () => ({
    maxLines: 12,
    element: '',
    height: '',
    lineheight: '',
    lines: ''
  }),
  mounted() {
    this.element = document.getElementById('id' + this.id)
    this.height = this.element.offsetHeight
    this.lineheight = parseInt(document.defaultView.getComputedStyle(this.element, null).getPropertyValue('line-height'))
    this.lines = parseInt(this.height / this.lineheight)
  }
}
</script>

<style lang="scss" scoped>
.overview {
  line-height: 2.5ex;
}

.overflow {
  line-height: 2.5ex;
  max-height: calc(2.5ex * var(--max-lines));
  overflow: hidden;
}
</style>
