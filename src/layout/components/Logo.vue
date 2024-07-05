<template>
  <div class="project-title">
    <transition name="sidebarLogoFade">
      <router-link v-if="!globalStore.sidebar.isActive" key="collapse" to="/">
        <SvgIcon icon-class="logo" size="20" />
      </router-link>

      <router-link v-else key="expand" to="/">
        <span class="name">SAAS - DEMO </span>
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

  .name {
    font-weight: bold;
    font-size: 18px;
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
