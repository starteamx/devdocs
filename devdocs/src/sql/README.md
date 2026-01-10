---
dir:
  text: SQL (PostgreSQL)
  collapsible: true
  expanded: true
  link: false
---

# SQL (PostgreSQL)

> TIOBE 排名 #7 | 数据查询标准，后端开发必备技能。

## 📘 概述

SQL 是关系型数据库的标准查询语言，是所有后端开发者必须掌握的基础技能。

## 🔗 快速导航

- [📖 API 文档](https://www.postgresql.org/docs/current/index.html) - PostgreSQL 文档
- [🎓 教程](https://www.w3schools.com/sql/) - SQL 学习教程
- [🌐 官网](https://www.postgresql.org/) - PostgreSQL 官网

## 💻 代码示例

```sql
-- SQL 的核心优势：声明式查询
-- 复杂查询的简洁表达
SELECT 
    u.name,
    COUNT(o.id) as order_count,
    SUM(o.total) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5
ORDER BY total_spent DESC
LIMIT 10;

-- 窗口函数 - 强大的分析能力
SELECT 
    name,
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank
FROM employees;
```

## 🎯 应用场景

- **数据查询**：业务数据分析
- **数据管理**：CRUD 操作
- **数据分析**：报表、统计
- **数据仓库**：ETL、数据建模

## 🛠️ 工具与框架

### 数据库系统
- **PostgreSQL**：开源关系型数据库
- **MySQL**：流行的开源数据库
- **SQLite**：轻量级嵌入式数据库

### 工具
- **pgAdmin**：PostgreSQL 管理工具
- **DBeaver**：通用数据库工具
- **DataGrip**：JetBrains 数据库 IDE
