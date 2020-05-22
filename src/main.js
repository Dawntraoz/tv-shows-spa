import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";

const store = {
  debug: true,
  state: {
    message: "Hello!"
  },
  setMessageAction(newValue) {
    if (this.debug) console.log("setMessageAction triggered with", newValue);
    this.state.message = newValue;
  },
  clearMessageAction() {
    if (this.debug) console.log("clearMessageAction triggered");
    this.state.message = "";
  }
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
