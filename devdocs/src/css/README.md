# CSS

> TIOBE 排名 #12 | Web 的皮肤。布局、动画与视觉表现的标准。

## 📘 核心定位

CSS 是 Web 的样式语言，控制网页的外观和布局，是现代 Web 开发不可或缺的一部分。

## 💡 灵魂代码

```css
/* CSS 的核心优势：灵活布局 + 现代特性 */
/* Flexbox - 现代布局 */
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

/* Grid - 二维布局 */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

/* CSS 变量 - 主题系统 */
:root {
    --primary-color: #42b983;
    --spacing: 1rem;
}

.button {
    background: var(--primary-color);
    padding: var(--spacing);
    transition: transform 0.2s;
}

.button:hover {
    transform: scale(1.05);
}

/* 动画 */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    animation: fadeIn 0.5s ease-in;
}
```

## 🎯 核心场景

- **Web 布局**：响应式设计、Grid/Flexbox
- **视觉效果**：动画、过渡、变换
- **主题系统**：CSS 变量、主题切换
- **移动端适配**：媒体查询、移动优先

## 🧰 必装军火库

### CSS 框架
- **Tailwind CSS**：实用优先的 CSS 框架
- **Bootstrap**：流行的 CSS 框架
- **Bulma**：现代 CSS 框架

### 预处理器
- **Sass/SCSS**：CSS 预处理器
- **Less**：CSS 预处理器
- **PostCSS**：CSS 转换工具

### 工具
- **Autoprefixer**：自动添加浏览器前缀
- **CSS Modules**：CSS 模块化

## 🔗 官方文档链接

- [📖 API 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference) - MDN CSS 参考
- [🎓 教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS) - MDN CSS 学习指南
- [🌐 标准规范](https://www.w3.org/Style/CSS/) - W3C CSS 工作组
