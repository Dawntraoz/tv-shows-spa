/**
 * Search state:
 * - openOverlay (Boolean)
 */
const state = {
  openOverlay: false,
}

const getters = {
  getOpenOverlay(state) {
    return state.openOverlay
  },
}

const mutations = {
  setOpenOverlay(state, data) {
    state.openOverlay = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
}
