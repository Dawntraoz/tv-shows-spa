// import the api endpoints
import { getAllShows, getShow, getShowImages } from '@/api/shows.api'

/**
 * Shows state:
 * - shows (Array of Objects)
 * - genres (Array of Strings)
 * - showInfo (Object)
 * - showImages (Array of Objects)
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
    return getAllShows().then(response => {
      commit(
        'SET_SHOWS',
        response.data.sort((prevValue, nextValue) =>
          prevValue.rating.average < nextValue.rating.average ? 1 : -1,
        ),
      )
      commit(
        'SET_GENRES',
        response.data
          .reduce((acc, show) => acc.concat(show.genres), [])
          .filter((genre, index, self) => self.indexOf(genre) === index),
      )
    })
  },
  async fetchShow({ commit }, id) {
    return getShow(id).then(response => commit('SET_SHOW_INFO', response.data))
  },
  async fetchShowImages({ commit }, id) {
    return getShowImages(id).then(response =>
      commit('SET_SHOW_IMAGES', response.data),
    )
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
