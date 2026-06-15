import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 相対 base にしておくと vite preview / 静的ホスティング / GitHub Pages の
// いずれでもアセット参照が壊れない（kawaii-site は固定 base だが本サイトは可搬性優先）
export default defineConfig({
  plugins: [react()],
  base: './',
})
