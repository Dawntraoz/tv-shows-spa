// Components
import ShowsListing from '@/views/ShowsListing.vue'
import Vuetify from 'vuetify'

// Utilities
import { appInit } from './app-init'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { __createMocks as createStoreMocks } from '@/store'

jest.mock('@/store')

const vuetify = new Vuetify()
const localVue = appInit(createLocalVue())

describe('ShowsListing.vue', () => {
  let storeMocks
  let wrapper

  const mountFunction = options => {
    return shallowMount(ShowsListing, {
      localVue,
      store: storeMocks.store,
      vuetify,
      ...options,
    })
  }

  beforeEach(() => {
    storeMocks = createStoreMocks()
    wrapper = mountFunction()
  })

  afterEach(() => {
    wrapper.destroy()
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('should be a Vue instance and be called ShowsListing', async () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.name()).toMatch('ShowsListing')
  })

  it('should get 1 result from Drama genre', () => {
    const results = wrapper.vm.showsByGenre('Drama')

    expect(results[0].id).toEqual(1)
  })

  it('should call fetchShows when getShows is void', () => {
    storeMocks = createStoreMocks({
      showsGetters: {
        getShows: () => [],
      },
    })
    wrapper = mountFunction({ store: storeMocks.store })
    expect(storeMocks.showsActions.fetchShows).toHaveBeenCalled()
  })
})
