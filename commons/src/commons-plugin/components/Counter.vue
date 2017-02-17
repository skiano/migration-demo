<template>
  <div class="counter">
    <h2 class="vandv-counter-state">{{title}}: {{count}}</h2>
    <button @click="decrement" class="vandv-counter-decrement">Decrement</button>
    <button @click="increment" class="vandv-counter-increment">Increment</button>
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
