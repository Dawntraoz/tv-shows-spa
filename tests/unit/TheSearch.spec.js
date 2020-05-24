// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// Store
import Vuex from 'vuex'
import Search from '@/store/modules/search'
import { cloneDeep } from 'lodash'

// Components
import TheSearch from '@/components/TheSearch.vue'

// Utilities
import { createLocalVue, shallowMount } from '@vue/test-utils'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(Vuex)

describe('TheSearch.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Search: cloneDeep(Search),
      },
    })

    wrapper = mountFunction()
  })

  afterEach(() => {
    wrapper.destroy()
    jest.resetModules()
    jest.clearAllMocks()
  })

  const mountFunction = options => {
    return shallowMount(TheSearch, {
      localVue,
      store,
      ...options,
    })
  }

  it('should have a component name', () => {
    expect(wrapper.name()).toMatch('TheSearch')
  })
})
