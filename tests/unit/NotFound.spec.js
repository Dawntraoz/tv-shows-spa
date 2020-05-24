// Components
import NotFound from "@/views/NotFound.vue";

// Utilities
import { shallowMount } from "@vue/test-utils";

describe("NotFound.vue", () => {
  const mountFunction = options => {
    return shallowMount(NotFound, {
      ...options
    });
  };

  it("should have a component name", () => {
    const wrapper = mountFunction();

    expect(wrapper.name()).toMatch("NotFound");
  });
});
