import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Service",
    name: "Service",
    component: () =>
      import("../views/Service.vue")
  },
  {
    path: "/Detail",
    name: "Detail",
    component: () =>
      import("../views/Detail.vue")
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/Member",
    name: "Member",
    component: () =>
      import("../views/Member.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
