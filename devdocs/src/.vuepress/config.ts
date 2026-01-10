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
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  plugins: [
    registerComponentsPlugin({
      componentsDir: resolve(__dirname, "./components"),
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
