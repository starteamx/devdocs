import { sidebar } from "vuepress-theme-hope";
import { languageData } from "../data/languages.js";

// 生成主页的 sidebar：显示所有语言列表
const homeSidebar = languageData.map(lang => ({
  text: `${lang.name} (排名 #${lang.rank})`,
  link: `/${lang.id}/`,
  icon: lang.icon,
}));

// 自动生成语言详情页的 sidebar 配置
const languageSidebar = languageData.reduce((acc, lang) => {
  acc[`/${lang.id}/`] = [
    {
      text: "语言列表",
      children: languageData.map(l => ({
        text: `${l.name} (排名 #${l.rank})`,
        link: `/${l.id}/`,
        icon: l.icon,
      })),
    },
  ];
  return acc;
}, {} as Record<string, any[]>);

export default sidebar({
  "/": [
    {
      text: "热门语言",
      children: homeSidebar,
    },
  ],
  ...languageSidebar,
});
