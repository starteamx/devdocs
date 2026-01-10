# C++

> TIOBE 排名 #2 | 性能的极限，游戏引擎与系统架构核心。

## 📘 概述

C++ 是性能至上的语言，在游戏开发、高性能系统、实时应用等领域不可替代。

## 🔗 快速导航

- [📖 API 文档](https://en.cppreference.com/w/cpp) - C++ 标准库参考
- [🎓 教程](https://www.learncpp.com/) - C++ 学习指南
- [🌐 官网](https://isocpp.org/) - ISO C++ 委员会

## 💻 代码示例

```cpp
// C++ 的核心优势：零成本抽象
#include <vector>
#include <algorithm>
#include <memory>

// RAII - 资源管理的最佳实践
class Resource {
    std::unique_ptr<int> data;
public:
    Resource() : data(std::make_unique<int>(42)) {}
    // 自动释放资源，无需手动 delete
};

// 模板元编程 - 编译期计算
template<int N>
struct Factorial {
    static const int value = N * Factorial<N-1>::value;
};

template<>
struct Factorial<0> {
    static const int value = 1;
};
```

## 🎯 应用场景

- **游戏开发**：Unreal Engine、游戏引擎
- **高性能系统**：数据库、搜索引擎
- **实时系统**：金融交易、控制系统
- **系统编程**：操作系统、驱动程序

## 🛠️ 工具与框架

### 标准库
- **STL**：标准模板库（容器、算法、迭代器）
- **Boost**：C++ 扩展库集合

### 开发框架
- **Qt**：跨平台 GUI 框架
- **Unreal Engine**：游戏引擎
- **CMake**：构建系统
