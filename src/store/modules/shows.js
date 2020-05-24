// import the api endpoints
import { getAllShows } from "@/api/shows.api";

const state = {
  shows: [],
  genres: []
};

const getters = {
  getShows(state) {
    return state.shows;
  },
  getGenres(state) {
    return state.genres;
  }
};

const actions = {
  async fetchShows({ commit }) {
    getAllShows()
      .then(response => {
        commit("SET_SHOWS", response.data);
        commit(
          "SET_GENRES",
          response.data
            .reduce((acc, show) => acc.concat(show.genres), [])
            .filter((genre, index, self) => self.indexOf(genre) === index)
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
};

const mutations = {
  SET_SHOWS(state, data) {
    state.shows = data;
  },
  SET_GENRES(state, data) {
    state.genres = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
