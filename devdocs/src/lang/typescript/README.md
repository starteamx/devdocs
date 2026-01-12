---
title: TypeScript
index: false
dir:
  expanded: false
  order: 1
  link: true
---

# TypeScript

> TIOBE 排名 #9 | JS 的超集，大型前端项目标配。

## 📘 概述

TypeScript 是 JavaScript 的超集，通过类型系统提供更好的开发体验和代码质量，是大型前端项目的首选。

## 🔗 快速导航

- [📖 API 文档](https://www.typescriptlang.org/docs/) - TypeScript 文档
- [🎓 教程](https://www.typescriptlang.org/docs/handbook/intro.html) - TypeScript 手册
- [🌐 官网](https://www.typescriptlang.org/) - TypeScript 官网

## 💻 代码示例

```typescript
// TypeScript 的核心优势：类型安全 + 现代语法
interface User {
    id: number;
    name: string;
    email?: string; // 可选属性
}

// 泛型 - 类型复用
function getData<T>(url: string): Promise<T> {
    return fetch(url).then(res => res.json());
}

// 类型推断 + 函数重载
function process(value: string): string;
function process(value: number): number;
function process(value: string | number): string | number {
    return typeof value === 'string' ? value.toUpperCase() : value * 2;
}

// 装饰器 - 元编程
@Injectable()
class UserService {
    @Log()
    getUser(id: number): User {
        return { id, name: 'Alice' };
    }
}
```

## 🎯 应用场景

- **大型前端项目**：React、Vue、Angular
- **全栈开发**：Next.js、NestJS
- **库开发**：类型定义、SDK 开发
- **企业级应用**：类型安全的重要性

## 🛠️ 工具与框架

### 前端框架
- **React + TypeScript**：类型安全的 React
- **Vue 3 + TypeScript**：组合式 API
- **Angular**：原生 TypeScript 支持

### 工具库
- **TypeScript Compiler**：tsc
- **ts-node**：直接运行 TypeScript
- **tsx**：TypeScript 执行器

### 类型定义
- **@types/node**：Node.js 类型定义
- **@types/react**：React 类型定义
