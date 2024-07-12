import { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layout/index.vue");

export default [
  {
    name: "/layout",
    path: "/layout",
    component: Layout,
    meta: { icon: "users", title: "表格" },
    children: [
      {
        path: "/vxe-table",
        name: "vxeTable",
        component: () => import("@/views/table/vxe-table/index.vue"),
        meta: { icon: "moon", title: "vxe-table" }
      },
      {
        path: "/jspreadsheet",
        name: "jspreadsheet",
        component: () => import("@/views/table/jspreadsheet/index.vue"),
        meta: { icon: "moon", title: "jspreadsheet" }
      }
    ]
  }
] as RouteRecordRaw[];
