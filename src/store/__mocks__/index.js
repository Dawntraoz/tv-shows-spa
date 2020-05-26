import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const showsGetters = {
  getShows: jest.fn().mockReturnValue([
    {
      id: 1,
      name: 'Thor',
      genres: ['Drama'],
    },
  ]),
  getGenres: jest.fn().mockReturnValue(['Drama']),
  getShowInfo: jest.fn().mockReturnValue({
    id: 1,
    name: 'Thor',
  }),
  getShowImages: jest.fn().mockReturnValue([
    {
      type: 'background',
      resolutions: {
        original: {
          url: 'background.jpg',
        },
      },
    },
    {
      type: 'poster',
      resolutions: {
        original: {
          url: 'poster.jpg',
        },
      },
    },
  ]),
}

export const showsActions = {
  fetchShows: jest.fn(),
  fetchShow: jest.fn(),
}

export const showsState = {
  shows: [
    {
      id: 1,
      name: 'Thor',
    },
  ],
  genres: ['Drama'],
  showInfo: {
    id: 1,
    name: 'Thor',
  },
  showImages: [
    {
      id: 1,
      type: 'background',
      resolutions: {
        original: {
          url: 'background.jpg',
        },
      },
    },
  ],
}

// eslint-disable-next-line no-underscore-dangle
export function __createMocks(
  custom = { showsState: {}, showsGetters: {}, showsActions: {} },
) {
  const mockShowsState = Object.assign({}, showsState, custom.showsState)
  const mockShowsGetters = Object.assign({}, showsGetters, custom.showsGetters)
  const mockShowsActions = Object.assign({}, showsActions, custom.showsActions)

  return {
    showsState: mockShowsState,
    showsGetters: mockShowsGetters,
    showsActions: mockShowsActions,
    store: new Vuex.Store({
      modules: {
        Shows: {
          namespaced: true,
          state: mockShowsState,
          getters: mockShowsGetters,
          actions: mockShowsActions,
        },
        Search: {
          namespaced: true,
        },
      },
    }),
  }
}

export const store = __createMocks().store
