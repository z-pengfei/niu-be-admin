<template>
  <div class="p-6px">
    <!-- src 设置在frame中显示的页面  -->
    <!-- frameborder是否显示frame边框[0-不显示边框 1-显示边框] -->
    <iframe
      src="https://element-plus.org/zh-CN/guide/design.html"
      frameborder="0"
      class="w-100%"
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
iframe {
  height: calc(100vh - 131px);
}
</style>
