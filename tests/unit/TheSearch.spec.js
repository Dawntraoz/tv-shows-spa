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

  it('should have a component name', () => {
    expect(wrapper.name()).toMatch('TheSearch')
  })

  it('should change query value and message be void', () => {
    wrapper.vm.query = 'test'
    wrapper.vm.searchShows()
    expect(wrapper.vm.query).toMatch('test')
    expect(wrapper.vm.message).toMatch('')
  })
})
