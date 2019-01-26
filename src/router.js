import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});

import skills from "../components/skills.vue";
import header from "../components/header.vue";
import tabs from "../components/tabs.vue";
import works from "../components/works.vue";
import posts from "../components/posts.vue";

const routes = [
  {
    path: "/",
    components: {
      default: skills,
      header: header,
      tabs: tabs
    }
  },
  {
    path: "/works",
    components: {
      default: works,
      header: header,
      tabs: tabs
    }
  },
  {
    path: "/blog",
    components: {
      default: posts,
      header: header,
      tabs: tabs
    }
  }
];

const router = new VueRouter({ routes, mode: "history" });

router.beforeEach((to, from, next) => {

  guard
    .get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {

      next();
    })
    .catch(error => {
      localStorage.removeItem("token");
    });
});

export default router;
