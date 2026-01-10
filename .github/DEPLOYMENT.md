# GitHub Pages 部署说明

## 前置配置

### 1. GitHub Pages 设置

在仓库 Settings → Pages 中配置：

- **Source**: GitHub Actions（新方式）
- 确保 GitHub Actions 有部署权限

### 2. Base 路径配置

由于仓库在子路径（非 `starteamx.github.io`），需要在 `devdocs/src/.vuepress/config.ts` 中设置正确的 base 路径：

```typescript
export default defineUserConfig({
  // 仓库名是 devdocs，设置为：
  base: "/devdocs/",
  
  // ... 其他配置
});
```

**重要**：base 路径必须与 GitHub 仓库名一致，否则资源路径会出错。

### 3. 环境权限

确保在仓库 Settings → Actions → General → Workflow permissions 中：

- **Read and write permissions** 已启用
- **Allow GitHub Actions to create and approve pull requests**（如果需要）

## 工作流说明

### 触发条件

- 推送到 `main` 分支时自动触发
- 也可以手动触发（Actions → Deploy to GitHub Pages → Run workflow）

### 执行步骤

1. **Checkout**: 检出代码
2. **Setup pnpm**: 安装 pnpm 10.12.1
3. **Setup Node.js**: 设置 Node.js 25.2.1 环境，启用 pnpm 缓存
4. **Install dependencies**: 在 `devdocs/` 目录下安装依赖
5. **Build**: 构建 VuePress 站点
6. **Setup Pages**: 配置 GitHub Pages
7. **Upload artifact**: 上传构建产物
8. **Deploy**: 部署到 GitHub Pages

### 构建输出

构建产物位于：`devdocs/src/.vuepress/dist/`

### 部署后访问

部署完成后，访问地址为：
- `https://starteamx.github.io/devdocs/`

## 故障排查

### 1. 构建失败

- 检查 Node.js 和 pnpm 版本是否兼容
- 查看 Actions 日志中的错误信息
- 确保 `devdocs/pnpm-lock.yaml` 存在且正确
- 检查 `devdocs/package.json` 中的构建脚本是否正确

### 2. 页面空白或 404

- 检查 `config.ts` 中的 `base` 路径是否正确
- 确保 base 路径与仓库名一致（包含前导斜杠和尾随斜杠）
- 验证部署是否成功完成

### 3. 资源加载失败

- 检查 base 路径配置
- 查看浏览器控制台的错误信息
- 确保静态资源路径正确
- 验证 `theme.ts` 中的 `hostname` 配置是否正确

### 4. 部署权限问题

- 检查 Settings → Actions → General → Workflow permissions
- 确保 "Read and write permissions" 已启用
- 检查 Pages 设置中是否选择了 "GitHub Actions" 作为源

### 5. 缓存问题

如果遇到依赖安装或构建问题，可以尝试：

1. 清除 GitHub Actions 缓存
2. 在 workflow 中添加 `--no-frozen-lockfile` 参数（已包含）
3. 检查 `pnpm-lock.yaml` 是否是最新的

## 版本信息

- **Node.js**: 25.2.1
- **pnpm**: 10.12.1
- **VuePress**: 2.0.0-rc.26
- **VuePress Theme Hope**: 2.0.0-rc.102

## 相关链接

- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [VuePress 文档](https://v2.vuepress.vuejs.org/)
- [VuePress Theme Hope 文档](https://theme-hope.vuejs.press/)
