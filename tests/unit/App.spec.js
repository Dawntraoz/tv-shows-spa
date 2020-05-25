// Components
import App from '@/App.vue'

// Custom router
import router from '@/router'
import store from '@/store'

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

  it('should have a component name App and be a Vue instance',  () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.name()).toMatch('App')
  })

  it('should call a watcher when the route change', async () => {
    router.push('/')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.$route.name).toMatch('shows')
  })
})
