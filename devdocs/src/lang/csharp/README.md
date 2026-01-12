---
title: C#
index: false
dir:
  expanded: false
  order: 1
  link: true
---

# C#

> TIOBE 排名 #5 | 年度语言，Unity 游戏与 .NET 开发利器。

## 📘 概述

C# 是微软 .NET 生态的核心语言，在 Windows 应用、Unity 游戏开发、企业级应用等领域广泛应用。

## 🔗 快速导航

- [📖 API 文档](https://learn.microsoft.com/en-us/dotnet/api/) - .NET API 参考
- [🎓 教程](https://learn.microsoft.com/en-us/dotnet/csharp/) - C# 学习指南
- [🌐 官网](https://dotnet.microsoft.com/) - .NET 官网

## 💻 代码示例

```csharp
// C# 的核心优势：现代语言特性 + 强类型系统
using System;
using System.Linq;

// LINQ - 语言集成查询
var result = numbers
    .Where(n => n > 10)
    .Select(n => n * 2)
    .ToList();

// async/await - 异步编程的优雅
public async Task<string> FetchDataAsync() {
    using var client = new HttpClient();
    return await client.GetStringAsync("https://api.example.com");
}

// 属性语法糖
public class Person {
    public string Name { get; set; }
    public int Age { get; init; }
}
```

## 🎯 应用场景

- **Unity 游戏开发**：3D 游戏、移动游戏
- **Windows 应用**：桌面应用、UWP
- **Web 后端**：ASP.NET Core
- **企业级应用**：.NET 企业框架

## 🛠️ 工具与框架

### 核心框架
- **.NET Core/.NET**：跨平台运行时
- **ASP.NET Core**：Web 应用框架
- **Entity Framework**：ORM 框架

### 游戏开发
- **Unity**：游戏引擎
- **MonoGame**：跨平台游戏框架
