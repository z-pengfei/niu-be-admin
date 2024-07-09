import { RouteRecordRaw } from "vue-router";

export default [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true }
  }
] as RouteRecordRaw[];
