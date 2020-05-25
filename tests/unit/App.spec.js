// Components
import App from '@/App.vue'

// Custom router
import router from '@/router'

// Utilities
import { appInit } from './app-init'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = appInit(createLocalVue())

describe('App.vue', () => {
  let wrapper

  const mountFunction = options => {
    return shallowMount(App, {
      localVue,
      router,
      ...options,
    })
  }

  beforeEach(() => {
    wrapper = mountFunction()
  })

  it('should have a component name', () => {
    expect(wrapper.name()).toMatch('App')
  })

  it('should call a watcher when the route change', async () => {
    router.push('/')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$route.name).toMatch('shows')
  })
})
