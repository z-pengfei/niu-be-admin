import { RouteRecordRaw } from "vue-router";

export default [
  {
    name: "dashboard",
    path: "/dashboard",
    component: () => import("@/views/HomeView.vue"),
    meta: { icon: "HomeFilled", iconType: "el", title: "首页", affix: true }
  }
] as RouteRecordRaw[];
