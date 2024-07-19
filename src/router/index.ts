import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const Layout = () => import("@/layout/index.vue");

import login from "./modules/login";
import dashboard from "./modules/dashboard";
import tablePage from "./modules/tablePage";
import link from "./modules/link";
import system from "./modules/system";

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    name: "/",
    path: "/",
    component: Layout,
    redirect: "dashboard",
    children: [...dashboard, ...tablePage, ...link, ...system]
  },
  ...login
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/login" });
}

export default router;
