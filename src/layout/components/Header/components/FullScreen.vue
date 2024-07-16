<template>
  <div class="cursor-pointer" @click="toggle">
    <SvgIcon :name="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
  </div>
</template>

<script setup lang="ts">
const { isFullscreen, toggle } = useFullscreen();
</script>

<style lang="scss" scoped></style>
