import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const Layout = () => import("@/layout/index.vue");

export default [
  {
    name: "/",
    path: "/",
    component: Layout,
    meta: { icon: "users", title: "首页" },
    children: [
      {
        name: "Dashboard",
        path: "/dashboard",
        component: HomeView,
        meta: { icon: "moon", title: "首页" }
      }
    ]
  }
] as RouteRecordRaw[];
