import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Route level code-splitting: separate chunks by name.[hash].js
const routes = [
  {
    path: "/",
    name: "ShowsListing",
    component: () =>
      import(/* webpackChunkName: "showslisting" */ "../views/ShowsListing.vue")
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
