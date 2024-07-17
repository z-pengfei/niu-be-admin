import { RouteRecordRaw } from "vue-router";
import ElementPlus from "@/views/link/elementPlus/index.vue";

export default [
  {
    name: "link",
    path: "/link",
    meta: { icon: "Link", iconType: "el", title: "外部链接" },
    children: [
      {
        name: "github",
        path: "/link/github",
        meta: {
          icon: "Bicycle",
          iconType: "el",
          title: "github",
          isLink: "https://github.com/z-pengfei/niu-be-admin"
        }
      },
      {
        name: "elementPlus",
        path: "/link/elementPlus",
        component: ElementPlus,
        meta: { icon: "ElementPlus", iconType: "el", title: "ElementPlus" }
      }
    ]
  }
] as RouteRecordRaw[];
