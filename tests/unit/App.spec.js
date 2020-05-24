// Libraries
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

// Components
import App from "@/App.vue";

// Utilities
import { createLocalVue, shallowMount } from "@vue/test-utils";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(VueRouter);
const router = new VueRouter();

describe("App.vue", () => {
  const mountFunction = options => {
    return shallowMount(App, {
      localVue,
      router,
      ...options
    });
  };

  it("should have a component name", () => {
    const wrapper = mountFunction();

    expect(wrapper.name()).toMatch("App");
  });
});
