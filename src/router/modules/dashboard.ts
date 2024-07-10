import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

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
        component: AboutView
      }
    ]
  }
] as RouteRecordRaw[];
