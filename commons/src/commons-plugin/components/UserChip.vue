<template>
  <div class="user-chip">
    <h4>User chip: {{loggedInState}}</h4>
    <section>
      <button v-if="!loggedIn" @click="login">Login</button>
      <button v-if="loggedIn" @click="logout">Logout</button>
    </section>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'user-chip',
    computed: {
      ...mapState('commons/user', {
        loggedInState: state => state.loggedIn ? 'Logged in' : 'Logged Out',
        loggedIn: state => state.loggedIn
      })
    },
    methods: {
      ...mapActions('commons/user', ['login', 'logout'])
    }
  }
</script>

<style scoped>
  .user-chip {
    padding: 15px;
    margin: 20px 0;
    background: lavender;
  }

  section {
    margin: 10px 0;
  }
</style>
