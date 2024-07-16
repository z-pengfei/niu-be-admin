import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const Layout = () => import("@/layout/index.vue");

export default [
  {
    name: "/",
    path: "/",
    component: Layout,
    meta: { icon: "HomeFilled", iconType: "el", title: "首页" },
    children: [
      {
        name: "dashboard",
        path: "/dashboard",
        component: HomeView,
        meta: { icon: "HomeFilled", iconType: "el", title: "首页" }
      }
    ]
  }
] as RouteRecordRaw[];
