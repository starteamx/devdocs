# JavaScript

> TIOBE 排名 #6 | Web 开发的垄断者，全栈开发的起点。

## 📘 核心定位

JavaScript 是 Web 开发的唯一选择，从前端到后端，从浏览器到服务器，无处不在。

## 💡 灵魂代码

```javascript
// JavaScript 的核心优势：灵活 + 异步
// 箭头函数 + 解构
const processData = async ({ name, age }) => {
    const user = await fetchUser(name);
    return { ...user, age };
};

// Promise 链式调用
fetch('/api/data')
    .then(res => res.json())
    .then(data => processData(data))
    .catch(err => console.error(err));

// 现代 ES6+ 语法
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];

const names = users.map(({ name }) => name);
const totalAge = users.reduce((sum, { age }) => sum + age, 0);
```

## 🎯 核心场景

- **前端开发**：React、Vue、Angular
- **后端开发**：Node.js、Express、NestJS
- **全栈开发**：Next.js、Nuxt.js
- **移动开发**：React Native、Ionic

## 🧰 必装军火库

### 前端框架
- **React**：UI 库
- **Vue.js**：渐进式框架
- **Angular**：企业级框架

### 后端框架
- **Node.js**：JavaScript 运行时
- **Express**：Web 应用框架
- **NestJS**：企业级 Node.js 框架

### 工具库
- **Lodash**：工具函数库
- **Axios**：HTTP 客户端
- **Webpack**：模块打包器

## 🔗 官方文档链接

- [📖 API 文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) - MDN 参考文档
- [🎓 教程](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) - MDN 学习指南
- [🌐 官网](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - MDN JavaScript 文档
