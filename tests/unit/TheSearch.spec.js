// Store
import store from '@/store'

// Components
import TheSearch from '@/components/TheSearch.vue'

// Utilities
import { appInit } from './app-init'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = appInit(createLocalVue())

describe('TheSearch.vue', () => {
  let wrapper

  beforeEach(() => {
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

  it('should be a Vue instance and be called TheSearch', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.name()).toMatch('TheSearch')
  })

  it('should have a query value of test', done => {
    wrapper.vm.query = 'test'
    wrapper.vm
      .searchShows()
      .then(() => {
        expect(wrapper.vm.query).toMatch('test')
      })
      .finally(done)
  })
})
