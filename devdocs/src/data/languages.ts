// src/data/languages.ts

export type CategoryType = 'dominator' | 'enterprise' | 'modern' | 'web';

export interface LanguageItem {
    id: string;
    rank: number; // 🏆 新增：TIOBE 排名
    name: string;
    icon: string;
    description: string;
    category: CategoryType; // 新增：分类字段
    links: {
      manual: string;   // 核心：API文档
      tutorial: string; // 入门：教程
      web: string;      // 🟢 最后一个按钮：直达官网/生态页
    };
  }
  
  export const languageData: LanguageItem[] = [
    // Group 1: Dominators (第一梯队)
    {
      id: "python",
      rank: 1,
      name: "Python",
      icon: "fa-brands fa-python",
      category: "dominator",
      description: "AI 时代霸主，数据科学首选。",
      links: {
        manual: "https://docs.python.org/3/library/",
        tutorial: "https://docs.python.org/zh-cn/3/tutorial/index.html",
        web: "https://pypi.org/"
      }
    },
    {
      id: "cpp",
      rank: 2,
      name: "C++",
      icon: "fa-solid fa-code",
      category: "dominator",
      description: "性能极限，游戏引擎核心。",
      links: {
        manual: "https://en.cppreference.com/w/cpp",
        tutorial: "https://www.learncpp.com/",
        web: "https://isocpp.org/"
      }
    },
    {
      id: "c",
      rank: 3,
      name: "C",
      icon: "fa-solid fa-microchip",
      category: "dominator",
      description: "计算机基石，嵌入式真理。",
      links: {
        manual: "https://en.cppreference.com/w/c",
        tutorial: "https://www.learn-c.org/",
        web: "https://www.iso.org/standard/74528.html"
      }
    },
    // Group 2: Enterprise (企业基石)
    {
      id: "java",
      rank: 4,
      name: "Java",
      icon: "fa-brands fa-java",
      category: "enterprise",
      description: "后端定海神针，高并发标准。",
      links: {
        manual: "https://docs.oracle.com/en/java/javase/21/docs/api/",
        tutorial: "https://dev.java/learn/",
        web: "https://dev.java/"
      }
    },
    {
      id: "csharp",
      rank: 5,
      name: "C#",
      icon: "fa-brands fa-microsoft",
      category: "enterprise",
      description: "全能型开发，游戏与企业应用。",
      links: {
        manual: "https://learn.microsoft.com/en-us/dotnet/api/",
        tutorial: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        web: "https://dotnet.microsoft.com/"
      }
    },
    {
      id: "sql",
      rank: 7,
      name: "SQL (PostgreSQL)",
      icon: "fa-solid fa-database",
      category: "enterprise",
      description: "数据持久化标准。",
      links: {
        manual: "https://www.postgresql.org/docs/current/index.html",
        tutorial: "https://www.w3schools.com/sql/",
        web: "https://www.postgresql.org/"
      }
    },
    // Group 3: Modern Power (现代高性能)
    {
      id: "go",
      rank: 8,
      name: "Go",
      icon: "fa-brands fa-golang",
      category: "modern",
      description: "云原生时代的 C 语言。",
      links: {
        manual: "https://pkg.go.dev/std",
        tutorial: "https://go.dev/doc/effective_go",
        web: "https://go.dev/"
      }
    },
    {
      id: "rust",
      rank: 10,
      name: "Rust",
      icon: "fa-brands fa-rust",
      category: "modern",
      description: "内存安全与高性能的未来。",
      links: {
        manual: "https://doc.rust-lang.org/std/",
        tutorial: "https://doc.rust-lang.org/book/",
        web: "https://www.rust-lang.org/"
      }
    },
    // Group 4: Web Stack (Web 全栈)
    {
      id: "js",
      rank: 6,
      name: "JavaScript",
      icon: "fa-brands fa-js",
      category: "web",
      description: "Web 通用语。",
      links: {
        manual: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
        tutorial: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
        web: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      }
    },
    {
      id: "typescript", 
      rank: 9,
      name: "TypeScript",
      icon: "fa-brands fa-js-square",
      category: "web",
      description: "大型前端工程标配。",
      links: {
        manual: "https://www.typescriptlang.org/docs/",
        tutorial: "https://www.typescriptlang.org/docs/handbook/intro.html",
        web: "https://www.typescriptlang.org/"
      }
    },
    {
      id: "html", 
      rank: 11, 
      name: "HTML", 
      icon: "fa-brands fa-html5", 
      category: "web", 
      description: "Web 的骨架，所有网页的起点。", 
      links: { 
        manual: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element", 
        tutorial: "https://developer.mozilla.org/en-US/docs/Learn/HTML", 
        web: "https://html.spec.whatwg.org/multipage/" 
      }
    },
    {
      id: "css", 
      rank: 12, 
      name: "CSS", 
      icon: "fa-brands fa-css3-alt", 
      category: "web", 
      description: "Web 的皮肤，布局与视觉标准。", 
      links: { 
        manual: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference", 
        tutorial: "https://developer.mozilla.org/en-US/docs/Learn/CSS", 
        web: "https://www.w3.org/Style/CSS/" 
      }
    },
  ];