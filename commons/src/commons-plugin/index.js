import storeModule from './store'
import components from './components'

function install (Vue, { store }) {
  if (install.installed) return
  install.installed = true

  /** Register all public components */
  components.forEach(c => Vue.component(c.name, c))

  /** Install commons store as a namespaced module in apps vuex instance */
  try {
    /** register library module into apps store */
    store.registerModule('commons', storeModule)
  } catch (err) {
    throw new Error(`
      Commons requires a vuex store as an option

      vuexStore = new Vuex.Store({})

      Vue.use(Commons, {
        store: vuexStore
      })
    `)
  }
}

export default { install }
