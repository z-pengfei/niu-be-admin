import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const Layout = () => import("@/layout/index.vue");

export default [
  {
    name: "/layout",
    path: "/layout",
    component: Layout,
    meta: { icon: "user", title: "测试页" },
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
        meta: { icon: "moon", title: "测试页1" }
      },
      {
        path: "/about",
        name: "about",
        component: AboutView,
        meta: { icon: "sub", title: "测试页2" }
      }
    ]
  }
] as RouteRecordRaw[];
