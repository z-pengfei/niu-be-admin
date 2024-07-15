<template>
  <div>
    <el-dropdown trigger="click">
      <div class="flex items-center cursor-pointer font-bold">
        <div class="user-avatar">A</div>
        <div class="ml-6px">Admin</div>
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

<script setup lang="ts"></script>

<style lang="scss" scoped>
.user-avatar {
  width: 30px;
  height: 30px;
  background: #2c68ff;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
}
</style>
