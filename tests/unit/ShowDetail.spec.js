// Components
import ShowDetail from '@/views/ShowDetail.vue'

// Custom store
import store from '@/store'

// Utilities
import { appInit } from './app-init'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = appInit(createLocalVue())

describe('ShowDetail.vue', () => {
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
    return shallowMount(ShowDetail, {
      localVue,
      store,
      ...options,
    })
  }

  it('should have a component name', () => {
    expect(wrapper.name()).toMatch('ShowDetail')
  })
})
