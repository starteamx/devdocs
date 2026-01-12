import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "热门语言",
      icon: "language",
      prefix: "lang/",
      link: "lang/",
      expanded: true,
      collapsible: true,
      children: "structure",
    },
  ],
});
