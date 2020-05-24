// Libraries
import Vue from "vue";
import Vuetify from "vuetify";

// Components
import ShowDetail from "@/views/ShowDetail.vue";

// Utilities
import { createLocalVue, shallowMount } from "@vue/test-utils";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuetify);

describe("ShowDetail.vue", () => {
  const mountFunction = options => {
    return shallowMount(ShowDetail, {
      localVue,
      ...options
    });
  };

  it("should have a component name", () => {
    const wrapper = mountFunction();

    expect(wrapper.name()).toMatch("ShowDetail");
  });
});
