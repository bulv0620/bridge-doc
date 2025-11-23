---
layout: doc
title: 常见问题
---

# 💡 常见问题

## Mac 安装程序显示 "已损坏" 如何处理?

在 GitHub Actions 上打包的 macOS 应用显示“已损坏”通常是由于 macOS 的安全机制（如代码签名和公证）未通过或被绕过。macOS 要求应用程序进行代码签名，否则在安装或运行时可能会被认为“已损坏”。以下是一些常见的解决方案：

1. **禁用 Gatekeeper**
   在本地运行应用时，您可以通过终端禁用 Gatekeeper 检查（不推荐用于发布，仅用于本地测试）：

   ```bash
   sudo spctl --master-disable
   ```

2. **绕过“已损坏”提示**
   使用以下命令清除应用的扩展属性，避免 macOS 识别为不可信的应用：

   ```bash
   xattr -cr /path/to/your/app.app
   ```

   xattr -cr 会递归清除应用的扩展属性，以解决 macOS 的不信任问题。
