<template>
  <header>hello, you are {{loggedInState}}</header>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'icu-login',
    data () {
      return {
        // data for this component
      }
    },
    computed: {
      ...mapState('commons/user', {
        loggedInState: state => state.loggedIn ? 'Logged in' : 'Logged out'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  z-index: 1000; 
}
</style>
