import { RouteRecordRaw } from "vue-router";

export default [
  {
    name: "system",
    path: "/system",
    meta: { icon: "Tools", iconType: "el", title: "系统管理" },
    children: [
      {
        name: "user",
        path: "/system/user",
        component: () => import("@/views/system/user/index.vue"),
        meta: { icon: "User", iconType: "el", title: "用户管理" }
      },
      {
        name: "role",
        path: "/system/role",
        component: () => import("@/views/system/role/index.vue"),
        meta: { icon: "BellFilled", iconType: "el", title: "角色管理" }
      }
    ]
  }
] as RouteRecordRaw[];
