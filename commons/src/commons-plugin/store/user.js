export default {
  namespaced: true,
  state: {
    loggedIn: false,
    username: null,
    roles: []
  },
  mutations: {
    setAuthState (state, bool) {
      state.loggedIn = bool
    }
  },
  actions: {
    login (context) {
      setTimeout(() => {
        context.commit('setAuthState', true)
      }, 200)
    },
    logout (context) {
      setTimeout(() => {
        context.commit('setAuthState', false)
      }, 10)
    }
  },
  getters: {}
}
