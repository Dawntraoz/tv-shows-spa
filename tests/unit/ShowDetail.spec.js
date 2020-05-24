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
  let wrapper;

  beforeEach(() => {
    wrapper = mountFunction();
  });

  afterEach(() => {
    wrapper.destroy();
    jest.resetModules();
    jest.clearAllMocks();
  });

  const mountFunction = options => {
    return shallowMount(ShowDetail, {
      localVue,
      ...options
    });
  };

  it("should have a component name", () => {
    expect(wrapper.name()).toMatch("ShowDetail");
  });
});
