<template>
  <div>
    <NiuTable :tableData="tableData" :columns="columns"></NiuTable>
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
  { id: 3, title: "皮肤数量", field: "number", width: "auto" }
];
</script>

<style scoped></style>
