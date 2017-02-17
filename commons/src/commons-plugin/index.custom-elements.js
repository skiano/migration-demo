import Vuex from 'vuex'
import storeModule from './store'
import components from './components'
import 'vue-custom-element'
import 'document-register-element/build/document-register-element'

function install (Vue) {
  if (install.installed) return
  install.installed = true

  const store = new Vuex.Store({
    modules: {
      commons: storeModule
    }
  })

  /** Register all public components */
  components.forEach(component =>
    Vue.customElement('my-' + component.name, { store, ...component }))

  return store
}

if (typeof window !== 'undefined' && window.Vue) {
  /*
   * Install and expose the store for integration
   */
  window.Vue.CommonStore = install(window.Vue)
};

export default { install }
