// Libraries
import Vue from "vue";
import Vuetify from "vuetify";

// Components
import HelloWorld from "@/components/HelloWorld.vue";

// Utilities
import { createLocalVue, shallowMount } from "@vue/test-utils";

Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuetify);

describe("HelloWorld.vue", () => {
  const mountFunction = options => {
    return shallowMount(HelloWorld, {
      localVue,
      ...options
    });
  };

  it("should have a custom message", () => {
    const wrapper = mountFunction({
      propsData: {
        msg: "message"
      }
    });

    expect(wrapper.text()).toMatch("message");
  });
});
