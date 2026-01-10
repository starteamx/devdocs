# Go

> TIOBE 排名 #8 | 云原生时代的 C 语言，简洁高效。

## 📘 核心定位

Go 是 Google 开发的系统编程语言，以简洁、高效、并发友好而著称，是云原生应用的首选。

## 💡 灵魂代码

```go
// Go 的核心优势：简洁 + 并发
package main

import (
    "fmt"
    "sync"
)

// Goroutine - 轻量级并发
func processData(data []int, wg *sync.WaitGroup) {
    defer wg.Done()
    // 处理数据
}

// Channel - 通信即同步
func worker(jobs <-chan int, results chan<- int) {
    for job := range jobs {
        results <- job * 2
    }
}

// 接口 - 隐式实现
type Writer interface {
    Write([]byte) (int, error)
}
```

## 🎯 核心场景

- **云原生应用**：Kubernetes、Docker、微服务
- **分布式系统**：服务网格、API 网关
- **网络服务**：Web 服务器、代理服务器
- **DevOps 工具**：CI/CD、监控工具

## 🧰 必装军火库

### Web 框架
- **Gin**：高性能 Web 框架
- **Echo**：轻量级 Web 框架
- **Fiber**：Express 风格的框架

### 工具库
- **Cobra**：CLI 应用框架
- **Viper**：配置管理
- **GORM**：ORM 框架

### 云原生
- **Kubernetes**：容器编排
- **Docker**：容器化平台

## 🔗 官方文档链接

- [📖 API 文档](https://pkg.go.dev/std) - Go 标准库参考
- [🎓 教程](https://go.dev/doc/effective_go) - Go 最佳实践
- [🌐 官网](https://go.dev/) - Go 官网
