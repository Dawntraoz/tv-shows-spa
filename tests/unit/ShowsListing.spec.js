// Store
import store from '@/store'

// Components
import ShowsListing from '@/views/ShowsListing.vue'

// Utilities
import { appInit } from './app-init'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = appInit(createLocalVue())

describe('ShowsListing.vue', () => {
  let wrapper

  const mountFunction = options => {
    return shallowMount(ShowsListing, {
      localVue,
      store,
      ...options,
    })
  }

  beforeEach(() => {
    wrapper = mountFunction()
  })

  afterEach(() => {
    wrapper.destroy()
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('should have a component name', async () => {
    expect(wrapper.name()).toMatch('ShowsListing')
  })

  it('should have a component name', async () => {
    const results = wrapper.vm.showsByGenre('Drama')

    expect(results).toEqual([])
  })
})
