<template>
  <div class="hello">
    <filter-panel></filter-panel>
    <counter></counter>
    <p>The count is: {{count}}</p>
    <p>
      Control from consumer app:
      <button @click="decrement">Decrement</button>
      <button @click="increment">Increment</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'hello',
  computed: {
    ...mapState('commons', {
      count: state => state.count,
    }),
  },
  methods: {
    ...mapActions('commons', ['increment', 'decrement']),
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
