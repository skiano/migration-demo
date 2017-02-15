<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <filter-panel></filter-panel>
  </div>
</template>

<script>
import { FilterPanel } from 'commons';

export default {
  name: 'hello',
  components: {
    FilterPanel,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
