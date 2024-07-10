<template>
  <el-menu
    :default-active="currentRoute.path"
    class="el-menu-vertical-demo"
    :collapse="!globalStore.sidebar.isActive"
  >
    <SidebarMenuItem :menuList="menuList"></SidebarMenuItem>
  </el-menu>
</template>

<script lang="ts" setup>
import { constantRoutes } from "@/router";
import { useGlobalStore } from "@/store/modules/global";
import { RouteRecordRaw, useRoute } from "vue-router";

const globalStore = useGlobalStore();
const currentRoute = useRoute();

const menuList = ref<RouteRecordRaw[]>(constantRoutes);
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  max-width: 200px;
}

.el-menu-vertical-demo {
  border-right: none;
}
</style>
