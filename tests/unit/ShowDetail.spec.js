// Components
import ShowDetail from '@/views/ShowDetail.vue'

// Custom store
import Vuex from 'vuex'

// Custom router
import router from '@/router'

// Utilities
import { appInit } from './app-init'
import { createLocalVue, shallowMount } from '@vue/test-utils'

const localVue = appInit(createLocalVue())

describe('ShowDetail.vue', () => {
  let getters = {
    getShowInfo: jest.fn().mockReturnValue([{}]),
    getShowImages: jest.fn().mockReturnValue([{}]),
  }
  let actions = {
    fetchShow: jest.fn(),
  }
  let Shows = {
    namespaced: true,
    getters,
    actions,
  }
  let store = new Vuex.Store({
    modules: {
      Shows: Shows,
    },
  })
  let wrapper

  const mountFunction = options => {
    return shallowMount(ShowDetail, {
      localVue,
      propsData: {
        id: 1,
      },
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
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('should be a Vue instance and be called ShowDetail', async () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.name()).toMatch('ShowDetail')
  })

  describe('Computed properties', () => {
    it('should return a void bg image', () => {
      expect(wrapper.vm.backgroundImage).toBe('')
    })
  })

  it('should call the before route update hook', async () => {
    const beforeRouteUpdate = wrapper.vm.$options.beforeRouteUpdate[0]
    const next = jest.fn()

    await beforeRouteUpdate.call(
      wrapper.vm,
      {
        params: {
          id: 1,
        },
      },
      {},
      next,
    )

    expect(next).toHaveBeenCalled()
  })
})
