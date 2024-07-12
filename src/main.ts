// import "./assets/main.css";
import "@/styles/index.scss";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { setupStore } from "@/store";

// SVG插件配置
import "virtual:svg-icons-register";
// 引入ElementPlus
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
// 引入ElementPlus所有图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 引入ElementPlus的暗黑模式css
import "element-plus/theme-chalk/dark/css-vars.css";
// 引入vxe-table表格
import VxeTable from "vxe-table";
import "vxe-table/lib/style.css";
// uncoss防止覆盖ElementPlus 的 el-button的css，所有放置最下方
import "uno.css";

// 创建app
const app = createApp(App);

// 注册ElementPlus所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

setupStore(app);

app.use(router);
app.use(ElementPlus, { locale: zhCn });
app.use(VxeTable);
app.mount("#app");
