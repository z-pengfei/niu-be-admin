<template>
  <!-- 有下级，用el-sub-menu，无下级用el-menu-item -->
  <template v-for="item in menuList" :key="item.path">
    <!-- 非叶子节点 v-show：true(显示)false(隐藏)，v-if反之。 -->
    <el-sub-menu v-if="item.children?.length && !item.meta.hidden" :index="item.path">
      <template #title>
        <SvgIcon :icon-class="item.meta.icon" size="18"></SvgIcon>
        <!-- <el-icon><location /></el-icon> -->
        <span style="margin-left: 10px"> {{ item.meta.title }}</span>
      </template>
      <SidebarMenuItem :menuList="item.children" />
    </el-sub-menu>
    <!-- 叶子节点（功能节点） -->
    <el-menu-item v-else-if="!item.meta.hidden" :index="item.path" @click="handleMenuIsLink(item)">
      <template #title>
        <SvgIcon :icon-class="item.meta.icon"></SvgIcon>
        {{ item.meta.title }}
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

defineProps({
  /**
   * 当前路由项对象
   */
  menuList: {
    type: Array<any>,
    required: true
  }
});

const handleMenuIsLink = (value: any) => {
  if (value.meta.isLink) return window.open(value.meta.isLink, "_blank");
  router.push(value.path);
};
</script>

<style lang="scss" scoped></style>
