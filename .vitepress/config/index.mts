import { defineConfig } from 'vitepress'
import { en } from './en.mts'
import { shared } from './shared.mts'
import { zh } from './zh.mts'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    zh: { label: '中文', ...zh },
  },
})
