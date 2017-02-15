import Vue from 'vue'
import Router from 'vue-router'
import Shell from 'components/Shell'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Shell
    }
  ]
})
