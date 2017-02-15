<template>
  <div class="shell">
    <filter-panel></filter-panel>
  </div>
</template>

<script>
import FilterPanel from './FilterPanel'

export default {
  name: 'hello',
  components: {
    FilterPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shell {
  width: 900px;
  margin: 100px auto;
}
</style>
