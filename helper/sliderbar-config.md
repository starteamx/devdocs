# vuepress-theme-hope 侧边栏配置教程总结
本教程详细介绍了vuepress-theme-hope主题中侧边栏的配置方法，涵盖基础配置、自动生成、进阶控制等多方面内容，旨在帮助使用者灵活搭建符合需求的侧边栏结构。

## 一、侧边栏基础配置
侧边栏配置由主题选项中的`sidebar`控制，核心包含字符串格式、对象格式、分组与嵌套三种基础配置方式，可根据需求选择使用。

### 1. 字符串格式
- **适用场景**：快速配置基础侧边栏，无需自定义图标、标题。
- **配置规则**：填入包含多个文件链接的数组，支持省略`.md`扩展名，以`/`结尾的路径会自动推断为`/README.md`。
- **示例代码**：
```javascript
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  sidebar: ["/zh/README.md", "/zh/guide/README.md", "/zh/config/README.md"],
  // 等价写法：sidebar: ["/zh/", "/zh/guide/", "/zh/config/"]
});
```

### 2. 对象格式
- **适用场景**：需要自定义侧边栏项目的文字、链接、图标，或通过正则控制项目激活状态。
- **核心配置项**：
  - `text`：项目文字（必填）；
  - `link`：项目链接（必填）；
  - `icon`：项目图标（可选，如"lightbulb"、"config"）；
  - `activeMatch`：项目激活匹配规则（可选，支持正则字符串，如`^/zh/faq`表示匹配`/zh/faq`开头的所有路径）。
- **示例代码**：
```javascript
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  sidebar: [
    {
      text: "指南",
      link: "/zh/guide/README.md",
      icon: "lightbulb",
    },
    { 
      text: "配置", 
      link: "/zh/config/README.md", 
      icon: "config" 
    },
    {
      text: "常见问题",
      link: "/zh/faq.md",
      icon: "circle-question",
      activeMatch: "^/zh/faq", // 匹配/zh/faq开头的路径
    },
  ],
});
```

### 3. 分组与嵌套
- **适用场景**：展示嵌套结构的侧边栏，将同类链接整理为菜单分组，支持多级嵌套。
- **核心扩展配置项**（基于对象格式）：
  - `children`：分组下的链接列表（必填，可嵌套对象实现多级分组）；
  - `prefix`：为组内所有链接添加默认路径前缀（可选，简化路径配置）；
  - `collapsible`：是否允许分组折叠（可选，默认为`false`，设为`true`时分组可折叠）；
  - `expanded`：可折叠分组的默认状态（可选，默认为`false`，设为`true`时默认展开）。
- **基础分组示例**：
```javascript
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  sidebar: [
    {
      text: "分组 1",
      icon: "tip", // 分组图标
      link: "/foo/", // 分组链接（可选）
      prefix: "/foo/", // 组内链接前缀
      collapsible: true, // 允许折叠
      expanded: true, // 默认展开
      children: [
        "README.md", // 实际路径：/foo/README.md（即/foo/）
        "geo.md" // 实际路径：/foo/geo.md
      ],
    },
    {
      text: "分组 2",
      children: [
        "bar.md", // 无prefix时需写完整路径相关部分
        "baz.md"
      ],
    },
  ],
});
```
- **多级嵌套示例**：
```javascript
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  sidebar: [
    {
      text: "Group",
      prefix: "/",
      children: [
        "baz", // 路径：/baz.html
        {
          text: "Sub Group 1", // 二级分组
          children: ["quz", "xyzzy"] // 路径：/quz.html、/xyzzy.html
        },
        {
          text: "Sub Group 2", // 二级分组
          prefix: "corge/", // 二级分组前缀
          children: [
            "fred", // 路径：/corge/fred.html
            "grault" // 路径：/corge/grault.html
          ],
        },
        "foo" // 路径：/foo.html
      ],
    },
  ],
});
```


## 二、多个侧边栏配置
- **适用场景**：为不同页面组（如不同目录下的页面）显示不同侧边栏。
- **配置规则**：以`路径前缀: 侧边栏配置`的对象格式配置，需注意**路径精度顺序**（精确路径在前，回退路径在后），VuePress会遍历键名匹配当前路径，匹配成功则显示对应侧边栏。
- **示例代码**（对应如下文件结构）：
  ```
  .
  ├─ README.md
  ├─ contact.md
  ├─ about.md
  ├─ foo/（含README.md、one.md、two.md）
  └─ bar/（含README.md、three.md、four.md）
  ```
```javascript
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  sidebar: {
    "/foo/": ["" /* /foo/ */, "one" /* /foo/one.html */, "two" /* /foo/two.html */],
    "/bar/": ["" /* /bar/ */, "three" /* /bar/three.html */, "four" /* /bar/four.html */],
    "/": ["" /* / */, "contact" /* /contact.html */, "about" /* /about.html */] // 回退配置
  },
});
```


## 三、通过文件结构自动生成侧边栏
- **核心功能**：将侧边栏配置中的“侧边栏数组”替换为`"structure"`关键词，主题会自动读取本地文件结构和Markdown Frontmatter生成侧边栏，大幅减少配置工作量。
- **基础用法**（基于上述多侧边栏示例优化）：
```javascript
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  sidebar: {
    "/foo/": "structure", // 自动生成/foo/目录下的侧边栏
    "/bar/": "structure", // 自动生成/bar/目录下的侧边栏
    "/": ["" /* / */, "contact" /* /contact.html */, "about" /* /about.html */] // 部分手动配置
  },
});
```
- **全量自动生成**：直接设置`sidebar: "structure"`，主题会为整个站点自动生成侧边栏，嵌套文件夹会自动渲染为分组。
- **限制说明**：
  - 自动生成依赖文件结构和Markdown Frontmatter，文件修改（如Frontmatter变更）会同步更新侧边栏；
  - 大型网站重新计算侧边栏耗时较高，仅在`hotReload`启用时实时更新。


## 四、进阶控制
### 1. 页面级控制（Frontmatter配置）
通过Markdown文件的Frontmatter设置，控制单个页面在侧边栏中的展示状态：
- **排除页面**：设置`index: false`，页面不被收录到侧边栏；
- **自定义排序**：设置`order`值（正数靠前，数值越小越前；负数靠后，数值越大越前），无`order`时按标题（当前语言）排序；
- **特殊规则**：`README.md`默认排在分组第一项，除非通过`index: false`或设为分组链接排除。

### 2. 文件夹级控制（README.md的Frontmatter配置）
通过文件夹下`README.md`的`dir`选项，控制文件夹在侧边栏中作为分组的行为：
| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `dir.text` | 分组标题 | README.md的标题 |
| `dir.icon` | 分组图标 | README.md的图标 |
| `dir.collapsible` | 是否可折叠 | `true` |
| `dir.expanded` | 默认是否展开 | `false` |
| `dir.link` | 分组是否可点击 | `false` |
| `dir.index` | 是否索引该目录 | `true` |
| `dir.order` | 分组在侧边栏中的排序 | `0` |
- **示例代码**：
```markdown
---
dir:
  order: 1 // 分组排序为1
  text: Group 1 // 分组标题
  icon: folder // 分组图标
  collapsible: true // 允许折叠
  expanded: false // 默认折叠
---
```
- **无README.md的文件夹**：分组标题默认从文件夹名称生成，无其他默认配置。

### 3. 全局自定义排序（sidebarSorter选项）
- **功能**：通过主题选项`sidebarSorter`，对同级侧边栏项目进行全局排序，支持内置排序器或自定义排序函数。
- **内置排序器**（可传入单个或多个关键词数组，按顺序生效）：
  - `readme`：`README.md`/`readme.md`排在最前；
  - `order`：正序按`order`升序，负序按`order`降序；
  - `date`/`date-desc`：按页面日期升序/降序；
  - `title`：按标题字母顺序；
  - `filename`：按文件名字母顺序。
- **默认配置**：`sidebarSorter: ["readme", "order", "title", "filename"]`。


## 五、特殊功能配置
### 1. 禁用侧边栏
- **单页面禁用**：在目标页面的Frontmatter中设置`sidebar: false`；
- **默认规则**：主页（`README.md`）默认禁用侧边栏。

### 2. 活动的标题链接
- **功能**：用户滚动页面时，嵌套标题链接和URL中的Hash值实时更新，由`@vuepress/plugin-active-header-links`插件实现；
- **禁用方法**：在主题插件配置中关闭该插件：
```javascript
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  plugins: {
    activeHeaderLinks: false, // 禁用活动标题链接
  },
});
```

### 3. 多语言支持
在`locales`选项中为不同语言目录单独配置侧边栏，实现多语言站点的侧边栏适配：
```javascript
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  locales: {
    "/": { // 英文目录（根目录）
      sidebar: [/* 英文侧边栏配置 */]
    },
    "/zh/": { // 中文目录
      sidebar: [/* 中文侧边栏配置 */]
    },
  },
});
```


## 六、相关助手与类型
- **类型导出**：`vuepress-theme-hope`导出`SidebarOptions`类型，用于侧边栏配置的类型校验；
- **帮助函数**：
  - `sidebar`：通用侧边栏配置助手函数；
  - `arraySidebar`/`objectSidebar`：针对多侧边栏拆分场景的专用助手函数，对应`SidebarArrayConfig`/`SidebarObjectConfig`类型；
- **使用示例**：
```javascript
// .vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  /* 侧边栏配置内容 */
]);
```


## 七、示例参考
文档提供了自身侧边栏的配置示例（`.vuepress/sidebar/zh.ts`），涵盖手动分组、自动生成（`structure`）的混合使用，可参考该示例搭建复杂侧边栏结构：
```javascript
import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig = sidebar({
  "/zh/": [
    "",
    "get-started/",
    {
      text: "指南",
      icon: "lightbulb",
      prefix: "guide/",
      children: ["intro/", "interface/", "layout/", /* 其他子项 */]
    },
    // 其他手动分组...
  ],
  "/zh/get-started/": "structure", // 自动生成
  "/zh/guide/": "structure", // 自动生成
  // 其他自动生成配置...
});
```


## 八、更新日志
记录了2022年3月至2025年5月期间侧边栏功能的更新历史，包括核心功能新增（如`structure`自动生成、`expanded`配置）、API变更（如`headingDepth`重命名为`headerDepth`）、文档优化等，可用于追溯功能迭代轨迹，适配不同版本的主题。