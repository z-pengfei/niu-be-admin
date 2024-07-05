import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  /**
   * 侧边栏显示隐藏
   */
  const sidebar = reactive({
    isActive: false
  });

  const toggleClick = () => {
    sidebar.isActive = !sidebar.isActive;
  };

  return {
    sidebar,
    toggleClick
  };
});
