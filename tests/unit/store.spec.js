// Api utilities
import moxios from 'moxios'
import api from '@/api'

// Utilities
import { __createMocks as createStoreMocks } from '@/store'
import shows from '@/store/modules/shows'

jest.mock('@/store')

describe('Store management', () => {
  let storeMocks

  beforeEach(() => {
    storeMocks = createStoreMocks()
  })

  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  describe('Actions', () => {
    beforeEach(() => {
      moxios.install(api)
    })

    afterEach(() => {
      moxios.uninstall(api)
    })

    it('when fetchShows is call should commit SET_SHOWS and SET_GENRES mutations', async () => {
      const commit = jest.fn()

      shows.actions.fetchShows({ commit }).then(() => {
        expect(commit).toHaveBeenCalledWith('SET_SHOWS', true)
        expect(commit).toHaveBeenCalledWith('SET_GENRES', true)
      })
    })

    it('when fetchShow is call should commit SET_SHOW_INFO mutation', async () => {
      const commit = jest.fn()

      shows.actions.fetchShow({ commit }, 1).then(() => {
        expect(commit).toHaveBeenCalledWith('SET_SHOW_INFO', true)
      })
    })

    it('when fetchShowImages is call should commit SET_SHOW_IMAGES mutation', done => {
      const commit = jest.fn()

      shows.actions
        .fetchShowImages({ commit }, 1)
        .then(() => {
          expect(commit).toHaveBeenCalledWith('SET_SHOW_IMAGES', true)
        })
        .finally(done())
    })
  })

  describe('Mutations', () => {
    it('should change the shows state', () => {
      shows.mutations.SET_SHOWS(storeMocks.showsState, [
        {
          id: 2,
          name: 'Love Actually',
        },
      ])
      expect(storeMocks.showsState.shows[0].name).toEqual('Love Actually')
    })

    it('should change the genres state', () => {
      shows.mutations.SET_GENRES(storeMocks.showsState, ['Romance'])
      expect(storeMocks.showsState.genres).toEqual(['Romance'])
    })

    it('should change the show info state', () => {
      shows.mutations.SET_SHOW_INFO(storeMocks.showsState, {
        id: 2,
        name: 'Love Actually',
      })
      expect(storeMocks.showsState.showInfo.name).toEqual('Love Actually')
    })

    it('should change the show images state to an empty array', () => {
      shows.mutations.SET_SHOW_IMAGES(storeMocks.showsState, [])
      expect(storeMocks.showsState.showImages).toEqual([])
    })
  })
})
