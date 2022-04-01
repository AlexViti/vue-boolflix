<template>
<div>
  <div class="overflow" :style="{ '--max-lines': maxLines }">
    <div class="overview" :id="'id' + id" v-html="overview" />
  </div>
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
@supports (-webkit-line-clamp: 3) and (display: -webkit-box) {
  .overview {
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
@supports (not(-webkit-line-clamp: 3)) or (not(display: -webkit-box)) {
  .overflow {
    line-height: 2.5ex;
    height: calc(2.5ex * var(--max-lines));
    overflow: hidden;
  }
}
</style>
