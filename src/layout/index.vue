<template>
  <el-container class="common-layout">
    <el-aside :style="{ width: !globalStore.sidebar.isActive ? '65px' : '220px' }" class="sidebar">
      <Logo /> <LeftMenu />
    </el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <TabView />
        <router-view>
          <template #default="{ Component }">
            <keep-alive :include="visitedViews">
              <component :is="Component" />
            </keep-alive>
          </template>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/store/modules/global";
const globalStore = useGlobalStore();

import { useTagsViewStore } from "@/store/modules/tagsView";
import { storeToRefs } from "pinia";
const tagsViewStore = useTagsViewStore();
const { visitedViews } = storeToRefs(tagsViewStore);
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
}
.el-aside {
  border-right: 1px solid var(--el-menu-border-color);
  transition: width 0.58s;
}
</style>
