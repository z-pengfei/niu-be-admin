import { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layout/index.vue");

export default [
  {
    name: "layout",
    path: "/layout",
    component: Layout,
    meta: { icon: "users", title: "表格" },
    children: [
      {
        name: "vxeTable",
        path: "/vxe-table",
        component: () => import("@/views/table/vxe-table/index.vue"),
        meta: { icon: "moon", title: "vxe-table" }
      },
      {
        name: "jspreadsheet",
        path: "/jspreadsheet",
        component: () => import("@/views/table/jspreadsheet/index.vue"),
        meta: { icon: "moon", title: "jspreadsheet" }
      }
    ]
  }
] as RouteRecordRaw[];
