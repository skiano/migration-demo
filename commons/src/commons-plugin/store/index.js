import user from './user'

/*
 * Store module
 * The responsibility for integrating
 * the store is at the app level
 */
export default {
  namespaced: true, // ensures consumer app actions do not collide
  modules: {
    user
  },
  state: {
    isCommons: true,
    count: 0
  },
  mutations: {
    increment (state) {
      state.count += 1
    },
    decrement (state) {
      state.count -= 1
    }
  },
  actions: {
    increment (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1)
    },
    decrement (context) {
      setTimeout(() => {
        context.commit('decrement')
      }, 1)
    }
  },
  getters: {}
}
