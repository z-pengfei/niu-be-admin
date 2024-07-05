<template>
  <div @click="globalStore.toggleClick">
    <SvgIcon
      class="hamburger"
      :class="{ 'is-active': globalStore.sidebar.isActive }"
      icon-class="shrink"
      size="20"
    />
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/store/modules/global";
const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.hamburger {
  vertical-align: middle;
  cursor: pointer;
  transform: scaleX(-1);
}

.hamburger.is-active {
  transform: scaleX(1);
}
</style>
