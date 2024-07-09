import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import login from "./modules/login";
import dashboard from "./modules/dashboard";

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [...login, ...dashboard];

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
