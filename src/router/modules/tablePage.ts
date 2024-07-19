import { RouteRecordRaw } from "vue-router";

export default [
  {
    name: "table",
    path: "/table",
    meta: { icon: "Histogram", iconType: "el", title: "表格" },
    children: [
      {
        name: "vxeTable",
        path: "/table/vxe-table",
        component: () => import("@/views/table/vxe-table/index.vue"),
        meta: { icon: "Notebook", iconType: "el", title: "vxe-table" }
      },
      {
        name: "jspreadsheet",
        path: "/table/jspreadsheet",
        component: () => import("@/views/table/jspreadsheet/index.vue"),
        meta: { icon: "Document", iconType: "el", title: "jspreadsheet" }
      },
      {
        name: "split",
        path: "/system/split",
        component: () => import("@/views/table/split/index.vue"),
        meta: { icon: "BellFilled", iconType: "el", title: "分割组件" }
      }
    ]
  }
] as RouteRecordRaw[];
