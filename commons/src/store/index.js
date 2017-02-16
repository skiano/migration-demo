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
    isCommons: true
  },
  mutations: {},
  actions: {},
  getters: {}
}
