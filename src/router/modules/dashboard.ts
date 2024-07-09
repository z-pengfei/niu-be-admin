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
        component: () => import("@/views/AboutView.vue")
      }
    ]
  }
] as RouteRecordRaw[];
