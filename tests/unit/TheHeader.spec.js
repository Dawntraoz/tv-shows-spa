// Store
import store from '@/store'

// Components
import TheHeader from '@/components/TheHeader.vue'

// Utilities
import { appInit } from './app-init'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = appInit(createLocalVue())

describe('TheHeader.vue', () => {
  let wrapper

  const mountFunction = options => {
    return shallowMount(TheHeader, {
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
  })

  // Inspect the raw component options
  it('should have data', () => {
    expect(typeof TheHeader.data).toBe('function')
  })
})
