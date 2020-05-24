import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Modules
import Shows from "./modules/shows";

const store = new Vuex.Store({
  modules: {
    Shows: Shows
  }
});

export default store;
