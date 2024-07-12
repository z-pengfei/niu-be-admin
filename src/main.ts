// import "./assets/main.css";
import "@/styles/index.scss";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/store";

// 本地SVG图标
import "virtual:svg-icons-register";

import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "element-plus/theme-chalk/dark/css-vars.css";

// uncoss防止覆盖ElementPlus 的 el-button的css，所有放置最下方
import "uno.css";
const app = createApp(App);

// 全局注册icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

setupStore(app);

app.use(router);
app.use(ElementPlus, { locale: zhCn });
app.mount("#app");
