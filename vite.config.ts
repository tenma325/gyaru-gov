import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages ではリポジトリ名の prefix が必要。
// 相対パス('./')は index.html の配置場所によって壊れるため、固定 base にする。
export default defineConfig({
  plugins: [react()],
  base: '/gyaru-gov/',
})
