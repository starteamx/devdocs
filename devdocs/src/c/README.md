# C

> TIOBE 排名 #3 | 现代计算机的基石，底层开发的王者。

## 📘 核心定位

C 语言是现代计算机科学的基石，几乎所有操作系统和底层系统都用 C 编写。

## 💡 灵魂代码

```c
// C 的核心优势：直接控制内存和硬件
#include <stdio.h>
#include <stdlib.h>

// 指针操作 - C 的精髓
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 内存管理 - 系统级编程的基础
int* create_array(int size) {
    int *arr = malloc(size * sizeof(int));
    return arr;
}
```

## 🎯 核心场景

- **系统编程**：操作系统、驱动程序
- **嵌入式开发**：微控制器、IoT 设备
- **高性能计算**：科学计算、游戏引擎
- **编译器开发**：语言实现的基础

## 🧰 必装军火库

### 开发工具
- **GCC**：GNU 编译器集合
- **Clang**：LLVM 编译器
- **GDB**：调试器

### 标准库
- **标准 C 库**：stdio.h, stdlib.h, string.h
- **POSIX API**：系统调用接口

## 🔗 官方文档链接

- [📖 API 文档](https://en.cppreference.com/w/c) - C 标准库参考
- [🎓 教程](https://www.learn-c.org/) - C 语言学习
- [🌐 标准规范](https://www.iso.org/standard/74528.html) - ISO C 标准
