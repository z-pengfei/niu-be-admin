<template>
  <div class="split-view" ref="splitView">
    <div class="pane top-pane" ref="topPane">
      <slot name="top"></slot>
    </div>
    <div class="divider" ref="divider" @mousedown="startDragging"></div>
    <div class="pane bottom-pane" ref="bottomPane">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const splitView = ref<HTMLDivElement | null>(null);
const topPane = ref<HTMLDivElement | null>(null);
const bottomPane = ref<HTMLDivElement | null>(null);
const divider = ref<HTMLDivElement | null>(null);
let isDragging = false;

const startDragging = (e: MouseEvent) => {
  isDragging = true;
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDragging);
};
const drag = (e: MouseEvent) => {
  if (!isDragging || !splitView.value || !topPane.value || !bottomPane.value) return;

  const containerHeight = splitView.value.clientHeight;
  const topHeight = e.clientY - splitView.value.offsetTop;

  const topHeightPercentage = (topHeight / containerHeight) * 100;
  const bottomHeightPercentage = 100 - topHeightPercentage;

  topPane.value.style.height = `${topHeightPercentage}%`;
  bottomPane.value.style.height = `${bottomHeightPercentage}%`;
};

const stopDragging = () => {
  isDragging = false;
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", stopDragging);
};

onMounted(() => {
  if (divider.value) {
    divider.value.addEventListener("mousedown", startDragging);
  }
});

onUnmounted(() => {
  if (divider.value) {
    divider.value.removeEventListener("mousedown", startDragging);
  }
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", stopDragging);
});
</script>

<style lang="scss" scoped>
.split-view {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 122px);
  width: 100%;
  overflow: hidden;
}

.pane {
  flex-grow: 1;
  overflow: auto;
}

.divider {
  height: 5px;
  background-color: #ccc;
  cursor: row-resize;
}
</style>
