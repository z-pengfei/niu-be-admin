<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.meta.hidden">
      <!-- 有下级，用el-sub-menu，无下级用el-menu-item -->
      <el-sub-menu v-if="item.children?.length" :index="item.path">
        <template #title>
          <el-icon>
            <component v-if="item.meta.iconType == 'el'" :is="item.meta.icon"></component>
            <SvgIcon v-else :name="item.meta.icon"></SvgIcon>
          </el-icon>
          <span> {{ item.meta.title }}</span>
        </template>
        <SidebarMenuItem :menuList="item.children" />
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" @click="handleMenuIsLink(item)">
        <el-icon>
          <component v-if="item.meta.iconType == 'el'" :is="item.meta.icon"></component>
          <SvgIcon v-else :name="item.meta.icon"></SvgIcon>
        </el-icon>
        <span> {{ item.meta.title }}</span>
      </el-menu-item>
    </template>
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
