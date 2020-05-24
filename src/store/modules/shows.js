// import the api endpoints
import { getAllShows, getShow, getShowImages } from '@/api/shows.api'

/**
 * Shows state:
 * - shows (Array of Objects)
 * - genres (Array of Strings)
 */
const state = {
  shows: [],
  genres: [],
  showInfo: [],
  showImages: [],
}

const getters = {
  getShows(state) {
    return state.shows
  },
  getGenres(state) {
    return state.genres
  },
  getShowInfo(state) {
    return state.showInfo
  },
  getShowImages(state) {
    return state.showImages
  },
}

const actions = {
  async fetchShows({ commit }) {
    getAllShows()
      .then(response => {
        commit('SET_SHOWS', response.data)
        commit(
          'SET_GENRES',
          response.data
            .reduce((acc, show) => acc.concat(show.genres), [])
            .filter((genre, index, self) => self.indexOf(genre) === index),
        )
      })
      .catch(error => {
        console.log(error)
      })
  },
  async fetchShow({ commit }, id) {
    getShow(id)
      .then(response => commit('SET_SHOW_INFO', response.data))
      .catch(error => {
        console.log(error)
      })
    getShowImages(id)
      .then(response => commit('SET_SHOW_IMAGES', response.data))
      .catch(error => {
        console.log(error)
      })
  },
}

const mutations = {
  SET_SHOWS(state, data) {
    state.shows = data
  },
  SET_GENRES(state, data) {
    state.genres = data
  },
  SET_SHOW_INFO(state, data) {
    state.showInfo = data
  },
  SET_SHOW_IMAGES(state, data) {
    state.showImages = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
