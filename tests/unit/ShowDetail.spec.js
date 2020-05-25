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

  const mountFunction = options => {
    return shallowMount(ShowDetail, {
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
    expect(wrapper.name()).toMatch('ShowDetail')
  })
})
