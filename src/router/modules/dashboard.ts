import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const Layout = () => import("@/layout/index.vue");

export default [
  {
    name: "/layout",
    path: "/layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/AboutView.vue")
      }
    ]
  }
] as RouteRecordRaw[];
