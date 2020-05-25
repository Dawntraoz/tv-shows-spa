// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

// Store
import Vuex from 'vuex'
import Search from '@/store/modules/search'
import { cloneDeep } from 'lodash'

// Components
import App from '@/App.vue'

// Utilities
import { createLocalVue, shallowMount } from '@vue/test-utils'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(VueRouter)
localVue.use(Vuex)

describe('App.vue', () => {
  let store
  let wrapper
  let router

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Search: cloneDeep(Search),
      },
    })

    router = new VueRouter({
      routes: [{ path: '/test-route', name: 'test-route' }],
    })

    wrapper = mountFunction()
  })

  const mountFunction = options => {
    return shallowMount(App, {
      localVue,
      store,
      router,
      ...options,
    })
  }

  it('should have a component name', () => {
    expect(wrapper.name()).toMatch('App')
  })

  it('should call a watcher when the route change', () => {
    router.push({ name: 'test-route' })

    expect(wrapper.vm.$route.name).toMatch('test-route')
  })
})
