<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <filter-panel :options="options"></filter-panel>
    <div class="reversal">
      <button @click="reverseOptions">Reverse order</button>
    </div>
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
      msg: 'Consuming common components',
      options: ['A', 'E', 'I', 'O', 'U'],
    };
  },
  methods: {
    reverseOptions() {
      this.options = this.options.reverse();
    },
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

.reversal {
  z-index: 5000;
  position: fixed;
  bottom: 10px;
  left: 10px;
}
</style>
