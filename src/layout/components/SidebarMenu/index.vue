<template>
  <el-menu
    :default-active="currentRoute.path"
    class="el-menu-vertical-demo"
    :collapse="!globalStore.sidebar.isActive"
  >
    <SidebarMenuItem :menuList="menuList"></SidebarMenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import SidebarMenuItem from "./components/SidebarMenuItem.vue";
import { constantRoutes } from "@/router";
import { useGlobalStore } from "@/store/modules/global";
import { RouteRecordRaw, useRoute } from "vue-router";

const globalStore = useGlobalStore();
const currentRoute = useRoute();

const menuList = ref<RouteRecordRaw[]>(constantRoutes);
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  max-width: 200px;
}

.el-menu-vertical-demo {
  border-right: none;
}
</style>
