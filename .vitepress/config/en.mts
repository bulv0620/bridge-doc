import { defineConfig } from "vitepress";
import pkg from "../../package.json";

export const en = defineConfig({
  lang: "en-US",
  description: "A cross-platform file synchronization tool",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/intro/what-is-bridge", activeMatch: "/guide" },
      {
        text: `v${pkg.version}`,
        items: [
          {
            text: "Changelog",
            link: "https://github.com/bulv0620/Bridge/blob/main/CHANGELOG.md",
          },
          {
            text: "Releases",
            link: "https://github.com/bulv0620/Bridge/releases",
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          collapsed: false,
          items: [
            { text: "What is Bridge?", link: "/guide/intro/what-is-bridge" },
            { text: "Getting Started", link: "/guide/intro/getting-started" },
            { text: "FAQ​", link: "/guide/intro/faq" },
          ],
        },
        {
          text: "Core Features​",
          collapsed: false,
          items: [
            { text: "File Sync", link: "/guide/feature/file-sync" },
            { text: "Share Hub", link: "/guide/feature/share-hub" },
            { text: "Downloader", link: "/guide/feature/downloader" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the GPL license.",
      copyright: "Copyright © 2025-present bulv.cc",
    },
  },
});
