// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import storeModule from './store'

Vue.use(Vuex)

// app level store
const store = new Vuex.Store({})

// register library module into apps store
store.registerModule('commons', storeModule)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
