<template>
  <div class="header-right">
    <el-switch
      v-model="isDark"
      @change="toggleDark"
      style="--el-switch-on-color: darkgray; --el-switch-off-color: lightgray"
    >
      <template #active-action>
        <SvgIcon icon-class="moon" />
      </template>
      <template #inactive-action>
        <SvgIcon icon-class="sun" />
      </template>
    </el-switch>
    <div class="full-screen" @click="toggle">
      <SvgIcon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" color="darkgray" />
    </div>
    <el-dropdown trigger="click">
      <div class="avatar-container">
        <div class="user-avatar">A</div>
        <div class="user-name">Admain</div>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item> 修改密码 </el-dropdown-item>
          <el-dropdown-item divided> 注销 </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
const isDark = useDark();
const toggleDark = () => useToggle(isDark);

const { isFullscreen, toggle } = useFullscreen();
</script>

<style lang="scss" scoped>
.hamburger {
  vertical-align: middle;
  cursor: pointer;
  transform: scaleX(-1);
}

.hamburger.is-active {
  transform: scaleX(1);
}

.header-right {
  & > div {
    margin-left: 20px;
  }
}
.full-screen {
  cursor: pointer;
}

.avatar-container {
  display: flex;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;

  .user-avatar {
    width: 30px;
    height: 30px;
    background: #2c68ff;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
  }
  .user-name {
    margin-left: 4px;
    margin-right: 20px;
    font-weight: bold;
  }
}
</style>
