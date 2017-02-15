
/* Import Commons CSS */
import 'commons/dist/src/components/FilterPanel.css';

import Vue from 'vue';
import App from './App';
import router from './router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
