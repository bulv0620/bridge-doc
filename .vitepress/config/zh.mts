import { defineConfig } from "vitepress";
import { getLatestVersion } from "../utils/getLatestVersion";


export const zh = defineConfig({
  lang: "zh-CN",
  description: "一款跨平台文件同步工具",
  themeConfig: {
    nav: [
      { text: "指南", link: "/zh/guide/intro/what-is-bridge", activeMatch: "/guide" },
      {
        text: await getLatestVersion(),
        items: [
          {
            text: "更新日志",
            link: "https://github.com/bulv0620/Bridge/blob/main/CHANGELOG.md",
          },
          {
            text: "历史版本",
            link: "https://github.com/bulv0620/Bridge/releases",
          },
        ],
      },
    ],
    sidebar: {
      "/zh/guide/": [
        {
          text: "简介",
          collapsed: false,
          items: [
            { text: "什么是 Bridge?", link: "/zh/guide/intro/what-is-bridge" },
            { text: "开始使用", link: "/zh/guide/intro/getting-started" },
            { text: "常见问题", link: "/zh/guide/intro/faq" },
          ],
        },
        {
          text: "核心功能",
          collapsed: false,
          items: [
            { text: "文件同步", link: "/zh/guide/feature/file-sync" },
            { text: "共享空间", link: "/zh/guide/feature/shared-zone" },
          ],
        },
      ],
    },
    footer: {
      message: "基于 GPL 许可证发布。",
      copyright: "版权 © 2024-present Kieran Wang",
    },
  },
});
