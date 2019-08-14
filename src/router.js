import Vue from "vue";
import Router from "vue-router";

import HomeView from "./views/Home.vue";

import ComponentHeader from "./components/Header.vue";
import ComponentFooter from "./components/Footer.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        header: ComponentHeader,
        default: HomeView,
        footer: ComponentFooter
      }
    }
  ]
});
