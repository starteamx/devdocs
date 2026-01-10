import { sidebar } from "vuepress-theme-hope";
import { languageData } from "../data/languages.js";

// 统一的侧边栏配置：所有页面使用相同的侧边栏
// 按排名排序
const sortedLanguageData = [...languageData].sort((a, b) => a.rank - b.rank);

const unifiedSidebar = [
  {
    text: "热门语言",
    link: "/",                    // 分组标题可点击，跳转到主页
    icon: "language",            // 分组图标
    collapsible: true,           // 允许折叠
    expanded: true,              // 默认展开
    children: sortedLanguageData.map(lang => ({
      text: `${lang.name} (排名 #${lang.rank})`,
      link: `/${lang.id}/`,
      icon: lang.icon,
    })),
  },
];

// 为所有语言详情页生成侧边栏配置
const languageSidebar = languageData.reduce((acc, lang) => {
  acc[`/${lang.id}/`] = unifiedSidebar;
  return acc;
}, {} as Record<string, any[]>);

export default sidebar({
  "/": unifiedSidebar,            // 主页使用统一侧边栏
  ...languageSidebar,            // 所有语言详情页使用统一侧边栏
});
