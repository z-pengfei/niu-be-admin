import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import autoprefixer from "autoprefixer";

import { resolve } from "path";
const pathSrc = fileURLToPath(new URL("./src", import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      resolvers: [
        // 自动导入 Element Plus
        ElementPlusResolver()
      ],
      dts: "src/typings/auto-imports.d.ts"
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
      // 指定自定义组件位置(默认:src/components)
      dirs: ["src/components", "src/**/components"],
      // 配置文件位置 (false:关闭自动生成)
      dts: "src/typings/components.d.ts"
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(pathSrc, "assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]"
    })
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["> 0.5% in CN", "last 2 versions"]
        })
      ]
    }
  },
  resolve: {
    alias: {
      "@": pathSrc
    }
  }
});
