/* Import Commons CSS */
import 'commons/dist/plugin/src/commons-plugin/index.css';

import Vue from 'vue';
import Vuex from 'vuex';
import Commons from 'commons';
import App from './App';
import router from './router';

Vue.use(Vuex);

/* dummy store */
const store = new Vuex.Store({});

Vue.use(Commons, { store });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
