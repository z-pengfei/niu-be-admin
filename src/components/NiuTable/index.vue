<template>
  <div>
    <vxe-table
      :border="true"
      show-overflow
      show-header-overflow
      auto-resize
      :row-config="{ isHover: true }"
      :data="tableData"
    >
      <template v-for="item in columns" :key="item.id">
        <template v-if="item.field === 'operate'">
          <vxe-column :field="item.field" :title="item.title">
            <template #default="scope">
              <div class="niube-operate">
                <slot name="operate" :scope="scope"></slot>
              </div>
            </template>
          </vxe-column>
        </template>
        <vxe-column :field="item.field" :title="item.title" />
      </template>
    </vxe-table>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tableData: {
    type: Array<any>,
    default: () => []
  },
  columns: {
    type: Array<any>,
    default: () => []
  }
});
</script>

<style lang="scss" scoped></style>
