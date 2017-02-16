<template>
  <div class="shell">
    <navigation></navigation>
    <filter-panel></filter-panel>
  </div>
</template>

<script>
import FilterPanel from './FilterPanel'
import Navigation from './Nav'

export default {
  name: 'hello',
  components: {
    Navigation,
    FilterPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*
Box sizing setup:
https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
*/
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

html {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.shell {
  width: 900px;
  margin: 100px auto;
}
</style>
