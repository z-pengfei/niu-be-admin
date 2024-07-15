<template>
  <div class="mt-4px cursor-pointer">
    <!-- 明亮模式 -->
    <el-tooltip content="明亮模式" v-if="!isDark">
      <el-icon :size="22" @click="toggleDark">
        <Sunny />
      </el-icon>
    </el-tooltip>
    <!-- 暗黑模式 -->
    <el-tooltip content="暗黑模式" v-if="isDark">
      <el-icon :size="22" @click="toggleDark">
        <Moon />
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
const isDark = useDark();
const toggleDark = async (event: MouseEvent) => {
  // useToggle(isDark);

  const x = event.clientX;
  const y = event.clientY;

  // 画圆
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

  // @ts-ignore
  if (document.startViewTransition === undefined) {
    /** 明亮和暗黑模式核心逻辑 */
    // 定义图标切换变量(true-月亮，false-太阳)

    isDark.value = !isDark.value;
    /** 明亮和暗黑模式核心逻辑 */
  } else {
    // @ts-ignore
    const transition = document.startViewTransition(() => {
      /** 明亮和暗黑模式核心逻辑 */
      // 定义图标切换变量(true-月亮，false-太阳)
      isDark.value = !isDark.value;
      /** 明亮和暗黑模式核心逻辑 */
    });
    await transition.ready;
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
    document.documentElement.animate(
      {
        clipPath: isDark.value ? clipPath : [...clipPath].reverse()
      },
      {
        duration: 300,
        easing: "ease-in",
        pseudoElement: isDark.value ? "::view-transition-new(root)" : "::view-transition-old(root)"
      }
    );
  }
};
</script>

<style lang="scss" scoped></style>
<style lang="scss">
::view-transition-old(root),
::view-transition-new(root) {
  mix-blend-mode: normal;
  animation: none;
}
::view-transition-old(root) {
  z-index: 9999;
}
::view-transition-new(root) {
  z-index: 1;
}
.dark::view-transition-old(root) {
  z-index: 1;
}
.dark::view-transition-new(root) {
  z-index: 9999;
}
</style>
