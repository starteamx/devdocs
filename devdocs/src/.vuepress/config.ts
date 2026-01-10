import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import theme from "./theme.js";

export default defineUserConfig({
  base: "/devdocs/",

  lang: "zh-CN",
  title: "DevDocs 开发者文档导航",
  description: "TIOBE 热门编程语言 API 文档与生态速查 —— 基于 vuepress-theme-hope 主题",
  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: resolve(__dirname, "./components"),
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
