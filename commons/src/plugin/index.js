import FilterPanel from './components/FilterPanel'
import storeModule from './store'

function install (Vue, { store }) {
  if (install.installed) return
  install.installed = true

  /** Register all public components */
  Vue.component('filter-panel', FilterPanel)

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
