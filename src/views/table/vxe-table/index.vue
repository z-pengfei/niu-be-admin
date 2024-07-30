<template>
  <div>
    <NiuTable :tableData="tableData" :columns="columns">
      <template #operate="scope">
        <template v-for="item in listOperation(scope.scope.row)" :key="item.id">
          <span :class="item.className" @click="item.func">{{ item.title }}</span>
        </template>
      </template>
    </NiuTable>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  { id: 1, name: "锤石", position: "辅助", number: "5个" },
  { id: 2, name: "金克斯", position: "ADC", number: "8个" },
  { id: 3, name: "蛮王", position: "上单", number: "12个" }
];
const columns = [
  { id: 1, title: "名称", field: "name", width: "auto" },
  { id: 2, title: "位置", field: "position", width: "auto" },
  { id: 3, title: "皮肤数量", field: "number", width: "auto" },
  { id: 4, title: "操作", fixed: "rigth", field: "operate", width: "auto" }
];

const listOperation = (row: any) => {
  return [
    {
      id: 1,
      className: "table-reload-examine",
      title: "详情",
      func: (e: any) => {}
    },
    {
      id: 2,
      className: "table-reload-examine",
      title: "编辑",
      func: (e: any) => {}
    },
    {
      id: 3,
      className: "table-reload-examine",
      title: "删除",
      func: (e: any) => {}
    }
  ];
};
</script>

<style scoped></style>
