// Libraries
import Vue from "vue";
import Vuetify from "vuetify";

// Store
import Vuex from "vuex";
import Shows from "@/store/modules/shows";
import { cloneDeep } from "lodash";

// Components
import ShowsListing from "@/views/ShowsListing.vue";

// Utilities
import { createLocalVue, shallowMount } from "@vue/test-utils";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe("ShowsListing.vue", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        Shows: cloneDeep(Shows)
      }
    });

    wrapper = mountFunction();
  });

  afterEach(() => {
    wrapper.destroy();
    jest.resetModules();
    jest.clearAllMocks();
  });

  const mountFunction = options => {
    return shallowMount(ShowsListing, {
      localVue,
      store,
      ...options
    });
  };

  it("should have a component name", () => {
    expect(wrapper.name()).toMatch("ShowsListing");
  });

  it("should have a component name", () => {
    const results = wrapper.vm.showsByGenre("Drama");

    expect(results).toEqual([]);
  });
});
