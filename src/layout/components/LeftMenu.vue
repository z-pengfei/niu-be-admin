<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="!globalStore.sidebar.isActive"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>组件封装</span>
      </template>
      <el-menu-item index="1-1">Vxe-table</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="3-1">用户管理</el-menu-item>
      <el-menu-item index="3-2">角色管理</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { useGlobalStore } from "@/store/modules/global";

const globalStore = useGlobalStore();

// const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  max-width: 200px;
}

.el-menu-vertical-demo {
  border-right: none;
}
</style>
