<template>
  <div class="login">
    <el-card>
      <div class="login-title">
        <h2>niu-be-admin</h2>
      </div>
      <el-form ref="loginFormRef" :model="loginData" :rules="loginRules" class="login-form">
        <el-form-item prop="username">
          <span>
            <svg-icon name="users" />
          </span>
          <el-input
            v-model="loginData.username"
            size="large"
            :placeholder="'账号'"
            name="username"
          />
        </el-form-item>

        <el-tooltip content="查看密码" placement="right">
          <el-form-item prop="password">
            <span>
              <svg-icon name="password" />
            </span>
            <el-input
              v-model="loginData.password"
              :placeholder="'密码'"
              :type="passwordVisible === false ? 'password' : 'input'"
              size="large"
              name="password"
              style="margin-right: 6px"
              @keyup.enter="handleLogin"
            />
            <span @click="passwordVisible = !passwordVisible">
              <svg-icon :name="passwordVisible === false ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
        </el-tooltip>

        <!-- 验证码 -->
        <el-form-item prop="captchaCode">
          <span class="p-2">
            <svg-icon name="captcha" />
          </span>

          <el-input
            v-model="loginData.captchaCode"
            :placeholder="'验证码'"
            class="el-captcha-input"
            @keyup.enter="handleLogin"
          />

          <div class="captcha">
            <el-image :src="captchaBase64" @click="getCaptcha" class="captcha-img">
              <template #error>
                <div class="image-slot">
                  <i-ep-picture />
                </div>
              </template>
            </el-image>
          </div>
        </el-form-item>
        <div>
          <el-checkbox v-model="rememberMe" label="记住我" />
        </div>

        <el-button
          :loading="loading"
          type="primary"
          class="login-button"
          @click.prevent="handleLogin"
          >登 录
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { LoginData } from "@/api/login/type";
import router from "@/router";
import { decrypt, encrypt } from "@/utils/rsaEncrypt";

const passwordVisible = ref(false); // 密码是否可见
const loginFormRef = ref(ElForm); // 登录表单ref
const captchaBase64 = ref(); // 验证码图片Base64字符串
const loading = ref(false); // 按钮loading
const rememberMe = ref(false); // 记住我

const loginData = ref<LoginData>({
  username: "",
  password: "",
  captchaCode: ""
});

const username = useStorage("username", "");
const password = useStorage("password", "");

const loginRules = computed(() => {
  return {
    username: [{ required: true, trigger: "blur", message: `请输入账号` }],
    password: [
      { required: true, trigger: "change", message: "请输入密码" },
      { trigger: "blur", validator: checkPassword }
    ]
  };
});

const checkPassword = (rule: any, value: any, callback: any) => {
  if (value.length < 6) {
    callback(new Error("The password can not be less than 6 digits"));
  } else {
    callback();
  }
};

/**
 * 登录
 */
const handleLogin = () => {
  loginFormRef.value.validate((valid: boolean) => {
    if (valid) {
      loading.value = false;
      encryptWay();
      router.push("/");
    }
  });
};

/**
 * 加密
 */
const encryptWay = () => {
  const loginParams = { ...loginData.value };
  loginParams.password = encrypt(loginParams.password);

  if (rememberMe.value) {
    username.value = loginData.value.username;
    password.value = loginParams.password;
  }

  return loginParams;
};

/**
 * 获取验证码
 */
const getCaptcha = () => {};

onMounted(() => {
  getLoginInfo();
  getCaptcha();
});

/**
 * 读取浏览器缓存登录信息
 */
const getLoginInfo = () => {
  if (username.value && password.value) {
    loginData.value.username = username.value;
    loginData.value.password = decrypt(password.value);
    rememberMe.value = true;
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  background: url("@/assets/image/login-bg.jpg") no-repeat center right;
  color: var(--el-fill-color-light);

  &-title {
    text-align: center;
  }

  &-button {
    width: 100%;
  }

  &-form {
    padding: 30px 10px;
    width: 300px;

    .captcha {
      position: absolute;
      top: 0;
      right: 0;

      &-img {
        width: 120px;
        height: 48px;
        cursor: pointer;
      }

      .image-slot {
        display: flex;
        align-items: center;
        justify-content: right;
        width: 100%;
        height: 100%;
        font-size: 18px;

        svg {
          margin-right: 10px;
        }
      }
    }
  }
}

.el-card {
  position: absolute;
  right: 18%;
  top: 24%;
}

:deep(.el-input) {
  flex: 1;
  margin-left: 10px;
  .el-input__wrapper {
    padding: 0;
    background-color: transparent;
    box-shadow: none;

    &.is-focus,
    &:hover {
      box-shadow: none !important;
    }

    input:-webkit-autofill {
      transition: background-color 1000s ease-in-out 0s; /* 通过延时渲染背景色变相去除背景颜色 */
    }
  }
}

.el-form-item {
  background: var(--el-input-bg-color);
  border: 1px solid var(--el-border-color);
  border-radius: 5px;
  padding: 0 10px;

  &__content {
    display: flex;
  }
}
</style>
