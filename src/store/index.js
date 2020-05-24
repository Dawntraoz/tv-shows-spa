import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Modules
import Shows from './modules/shows'
import Search from './modules/search'

const store = new Vuex.Store({
  modules: {
    Shows: Shows,
    Search: Search,
  },
})

export default store
