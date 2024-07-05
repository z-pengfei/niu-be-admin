<template>
  <div class="header">
    <NavBar />
    <NavRight />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header {
  height: 50px;
  @extend .flex;

  &-right {
    @extend .flex;
  }
}
</style>
