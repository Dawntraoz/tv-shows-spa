// Components
import ShowsListItem from '@/components/ShowsListItem.vue'

// Utilities
import { appInit } from './app-init'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = appInit(createLocalVue())

describe('ShowsListItem.vue', () => {
  let wrapper

  const mountFunction = options => {
    return shallowMount(ShowsListItem, {
      localVue,
      propsData: {
        item: {
          id: 1,
          name: 'Test',
        },
      },
      ...options,
    })
  }

  beforeEach(() => {
    wrapper = mountFunction()
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('should be a Vue instance and be called ShowsListItem', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.name()).toMatch('ShowsListItem')
  })
})
