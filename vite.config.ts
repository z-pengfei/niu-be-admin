import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import autoprefixer from "autoprefixer";
import Unocss from "unocss/vite";
import { resolve } from "path";
import { viteMockServe } from "vite-plugin-mock";
const pathSrc = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig(({ mode }) => {
  // process.cwd() 为 node 执行的进程目录 获取当前执行环境目录
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "/niu-be-admin/",
    plugins: [
      vue(),
      Unocss(),
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
      }),
      // mock服务
      viteMockServe({
        mockPath: "mock",
        enable: true
      })
    ],
    css: {
      // css全局变量使用，@/styles/variable.scss文件
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";'
        }
      },
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ["> 0.5% in CN", "last 2 versions"]
          })
        ]
      }
    },
    server: {
      // 是否开启https
      // https: false as boolean,
      // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
      host: true,
      // 开发环境预览服务器端口
      port: 9001,
      // 启动后是否自动打开浏览器
      open: false,
      // 是否开启CORS跨域
      cors: true,
      // 代理服务器
      // 帮助我们开发时解决跨域问题
      proxy: {
        // 这里的意思是 以/api开头发送的请求都会被转发到 http://xxx:9000
        [env.VITE_APP_API_BASEURL]: {
          target: "http://localhost:9001",
          // 改变 Host Header
          changeOrigin: true
          // 发起请求时将 '/api' 替换为 ''
          //rewrite: (path) => path.replace(/^\/api/, ""),
        },
        [env.VITE_APP_MOCK_BASEURL]: {
          target: "http://localhost:9001",
          // 改变 Host Header
          changeOrigin: true
          // 发起请求时将 '/api' 替换为 ''
          //rewrite: (path) => path.replace(/^\/api/, ""),
        }
      }
    },
    resolve: {
      alias: {
        "@": pathSrc
      }
    },
    build: {
      outDir: "docs"
    }
  };
});
