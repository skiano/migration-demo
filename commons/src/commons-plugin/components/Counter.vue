<template>
  <div id="super-counter">
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

<style type="text/css">
  
</style>
