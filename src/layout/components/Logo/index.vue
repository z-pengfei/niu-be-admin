<template>
  <div class="project-title">
    <transition name="sidebarLogoFade">
      <router-link v-if="!globalStore.sidebar.isActive" key="collapse" to="/">
        <SvgIcon name="niube-logo" size="80" />
      </router-link>

      <router-link v-else key="expand" to="/">
        <span class="font-bold text-xl">niu-be-admin</span>
      </router-link>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from "@/store/modules/global";
const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped>
.project-title {
  text-align: center;
  height: 50px;
  width: 100%;

  & > a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.sidebarLogoFade-enter-active {
  transition: opacity 2s;
}

.sidebarLogoFade-leave-active,
.sidebarLogoFade-enter-from,
.sidebarLogoFade-leave-to {
  opacity: 0;
}
</style>
