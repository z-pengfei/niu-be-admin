import { defineStore } from "pinia";

export const useTagsViewStore = defineStore("tagsView", () => {
  /**
   * 页签路由管理
   */
  const visitedViews = ref<TagView[]>([
    { name: "home", path: "/", title: "测试路由home", fullPath: "/home" },
    { name: "about", path: "/about", title: "测试路由about", fullPath: "/about" }
  ]);

  return {
    visitedViews
  };
});
