<template>
  <div class="counter" id="super-counter">
    <h2>{{title}}: {{count}}</h2>
    <button @click="decrement">Decrement</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'counter',
    props: {
      title: {
        type: String,
        default: 'Counter'
      }
    },
    computed: {
      ...mapState('commons', {
        count: state => state.count
      })
    },
    methods: {
      ...mapActions('commons', ['increment', 'decrement'])
    }
  }
</script>

<style scoped>
  .counter {
    padding: 20px;
    margin: 20px 0;
    background: yellow;
  }

  h2 {
    margin-bottom: 15px;
  }
</style>
