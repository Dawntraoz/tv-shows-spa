// Libraries
import Vue from "vue";
import Vuetify from "vuetify";

// Components
import ShowsListing from "@/views/ShowsListing.vue";

// Utilities
import { createLocalVue, shallowMount } from "@vue/test-utils";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuetify);

describe("ShowsListing.vue", () => {
  const mountFunction = options => {
    return shallowMount(ShowsListing, {
      localVue,
      ...options
    });
  };

  it("should have a component name", () => {
    const wrapper = mountFunction();

    expect(wrapper.name()).toMatch("ShowsListing");
  });
});
