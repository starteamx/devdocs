// src/data/languages.ts

export interface LanguageItem {
    id: string;
    rank: number; // 🏆 新增：TIOBE 排名
    name: string;
    icon: string;
    description: string;
    links: {
      manual: string;   // 核心：API文档
      tutorial: string; // 入门：教程
      web: string;      // 🟢 最后一个按钮：直达官网/生态页
    };
  }
  
  export const languageData: LanguageItem[] = [
    {
      id: "python",
      rank: 1,
      name: "Python",
      icon: "fa-brands fa-python",
      description: "AI 时代霸主，数据科学与脚本的首选。",
      links: {
        manual: "https://docs.python.org/3/library/",
        tutorial: "https://docs.python.org/3/tutorial/",
        web: "https://pypi.org/" // Python 生态中心
      }
    },
    {
      id: "c",
      rank: 2,
      name: "C",
      icon: "fa-solid fa-c", // 需确保 FontAwesome 有此图标，或用 text
      description: "现代计算机的基石，底层开发的王者。",
      links: {
        manual: "https://en.cppreference.com/w/c", // 业界公认最佳
        tutorial: "https://www.learn-c.org/",
        web: "https://www.iso.org/standard/74528.html"
      }
    },
    {
      id: "cpp",
      rank: 3,
      name: "C++",
      icon: "fa-solid fa-code", // 用通用代码图标代替
      description: "性能的极限，游戏引擎与系统架构核心。",
      links: {
        manual: "https://en.cppreference.com/w/cpp",
        tutorial: "https://www.learncpp.com/",
        web: "https://isocpp.org/"
      }
    },
    {
      id: "java",
      rank: 4,
      name: "Java",
      icon: "fa-brands fa-java",
      description: "企业级开发标准，高并发系统的定海神针。",
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
      icon: "fa-brands fa-microsoft", // C# 通常属于微软系
      description: "年度语言，Unity 游戏与 .NET 开发利器。",
      links: {
        manual: "https://learn.microsoft.com/en-us/dotnet/api/",
        tutorial: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        web: "https://dotnet.microsoft.com/"
      }
    },
    {
      id: "js",
      rank: 6,
      name: "JavaScript",
      icon: "fa-brands fa-js",
      description: "Web 开发的垄断者，全栈开发的起点。",
      links: {
        manual: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
        tutorial: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
        web: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      }
    },
    {
      id: "go",
      rank: 7,
      name: "Go",
      icon: "fa-brands fa-golang",
      description: "云原生时代的 C 语言，简洁高效。",
      links: {
        manual: "https://pkg.go.dev/std",
        tutorial: "https://go.dev/doc/effective_go",
        web: "https://go.dev/"
      }
    },
    {
      id: "sql",
      rank: 8,
      name: "SQL",
      icon: "fa-solid fa-database",
      description: "数据查询标准，后端开发必备技能。",
      links: {
        manual: "https://www.postgresql.org/docs/current/index.html", // 以 PG 为例
        tutorial: "https://www.w3schools.com/sql/",
        web: "https://www.postgresql.org/"
      }
    },
    {
      id: "fortran", // TIOBE 常用客，如果觉得太老可换 TypeScript
      rank: 9,
      name: "Fortran",
      icon: "fa-solid fa-flask", 
      description: "科学计算鼻祖，高性能计算领域依然活跃。",
      links: {
        manual: "https://gcc.gnu.org/onlinedocs/gfortran/",
        tutorial: "https://fortran-lang.org/learn/",
        web: "https://fortran-lang.org/"
      }
    },
    {
      id: "typescript", 
      rank: 10,
      name: "TypeScript",
      icon: "fa-brands fa-js-square", // 借用 JS 方块图
      description: "JS 的超集，大型前端项目标配。",
      links: {
        manual: "https://www.typescriptlang.org/docs/",
        tutorial: "https://www.typescriptlang.org/docs/handbook/intro.html",
        web: "https://www.typescriptlang.org/"
      }
    },
    {
        id: "html",
        rank: 11, // 或者给一个特殊的 rank，比如 0 代表基石
        name: "HTML",
        icon: "fa-brands fa-html5",
        description: "Web 的骨架。所有网页的起点，语义化的真理。",
        links: {
          // 💡 MDN 的 HTML 元素参考表是开发者的日常必备
          manual: "https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element", 
          tutorial: "https://developer.mozilla.org/zh-CN/docs/Learn/HTML",
          // 这里给 WHATWG 的规范，这才是浏览器实现的终极依据（虽然很难读）
          web: "https://html.spec.whatwg.org/multipage/" 
        }
      },
      {
        id: "css",
        rank: 12,
        name: "CSS",
        icon: "fa-brands fa-css3-alt",
        description: "Web 的皮肤。布局、动画与视觉表现的标准。",
        links: {
          // 💡 MDN 的 CSS 属性索引
          manual: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference",
          tutorial: "https://developer.mozilla.org/zh-CN/docs/Learn/CSS",
          // W3C CSS 工作组官网
          web: "https://www.w3.org/Style/CSS/" 
        }
      }
  ];