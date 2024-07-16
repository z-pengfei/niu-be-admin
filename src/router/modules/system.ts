import { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layout/index.vue");

export default [
  {
    name: "layout",
    path: "/layout",
    component: Layout,
    meta: { icon: "users", title: "系统管理" },
    children: [
      {
        name: "user",
        path: "/user",
        component: () => import("@/views/system/user/index.vue"),
        meta: { icon: "moon", title: "用户管理" }
      },
      {
        name: "role",
        path: "/role",
        component: () => import("@/views/system/role/index.vue"),
        meta: { icon: "sub", title: "角色管理" }
      }
    ]
  }
] as RouteRecordRaw[];
