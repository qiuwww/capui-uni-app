import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import slideNav from "./slide-nav";

import registerRoute from "./register-route";

console.log("slideNav", slideNav, registerRoute(slideNav));

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  ...registerRoute(slideNav),
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
