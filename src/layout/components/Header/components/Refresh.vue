<template>
  <div class="mt-4px cursor-pointer">
    <el-tooltip content="刷新">
      <el-icon :size="20" @click="handleRefresh">
        <RefreshRight />
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
const handleRefresh = () => {
  ElMessage.success("刷新成功");
};
</script>

<style lang="scss" scoped></style>
