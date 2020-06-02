/* eslint-disable no-undef */
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
  fetchShowImages: jest.fn(),
}

export const showsMutations = {
  SET_SHOWS: jest.fn(),
  SET_GENRES: jest.fn(),
  SET_SHOW_INFO: jest.fn(),
  SET_SHOW_IMAGES: jest.fn(),
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
  custom = {
    showsState: {},
    showsGetters: {},
    showsActions: {},
    showsMutations: {},
  },
) {
  const mockShowsState = Object.assign({}, showsState, custom.showsState)
  const mockShowsGetters = Object.assign({}, showsGetters, custom.showsGetters)
  const mockShowsActions = Object.assign({}, showsActions, custom.showsActions)
  const mockShowsMutations = Object.assign(
    {},
    showsMutations,
    custom.showsMutations,
  )

  return {
    showsState: mockShowsState,
    showsGetters: mockShowsGetters,
    showsActions: mockShowsActions,
    showsMutations: mockShowsMutations,
    store: new Vuex.Store({
      modules: {
        Shows: {
          namespaced: true,
          state: mockShowsState,
          getters: mockShowsGetters,
          actions: mockShowsActions,
          mutations: mockShowsMutations,
        },
        Search: {
          namespaced: true,
        },
      },
    }),
  }
}

export const store = __createMocks().store
