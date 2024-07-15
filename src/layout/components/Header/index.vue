<template>
  <div class="header">
    <div class="flex items-center justify-between truncate">
      <!-- 菜单栏折叠/展开 -->
      <Collapse />
    </div>
    <div class="header-right flex items-center justify-between">
      <!-- 暗黑模式 -->
      <Dark />
      <!-- 刷新 -->
      <Refresh />
      <!-- 全屏 -->
      <FullScreen />
      <!-- 用户 -->
      <User />
    </div>
  </div>
</template>

<script setup lang="ts">
import Collapse from "./components/Collapse.vue";
import FullScreen from "./components/FullScreen.vue";
import Dark from "./components/Dark.vue";
import User from "./components/User.vue";
import Refresh from "./components/Refresh.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $aside-header-height;

  &-right > div {
    margin-left: 20px;
  }
}
</style>
