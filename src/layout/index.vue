<template>
  <el-container class="common-layout">
    <el-aside :style="{ width: !globalStore.sidebar.isActive ? '65px' : '220px' }" class="sidebar">
      <Logo /> <SidebarMenu />
    </el-aside>
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <TagsView />
        <div class="wrapper">
          <router-view>
            <template #default="{ Component }">
              <keep-alive :include="cachedViews">
                <component :is="Component" />
              </keep-alive>
            </template>
          </router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from "@/layout/components/Header/index.vue";
import Logo from "@/layout/components/Logo/index.vue";
import SidebarMenu from "@/layout/components/SidebarMenu/index.vue";
import TagsView from "@/layout/components/TagsView/index.vue";

import { useGlobalStore } from "@/store/modules/global";
const globalStore = useGlobalStore();

import { useTagsViewStore } from "@/store/modules/tagsView";
import { storeToRefs } from "pinia";
const tagsViewStore = useTagsViewStore();
const { cachedViews } = storeToRefs(tagsViewStore);
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
}
.el-header {
  height: auto;
}
.el-main {
  padding: 0;
}
.el-aside {
  border-right: 1px solid var(--el-menu-border-color);
  transition: width 0.58s;
}
.wrapper {
  border: 8px #eeeeee solid;
  padding: 8px;
  height: calc(100vh - 56px - 34px);
  width: 100%;
}
</style>
