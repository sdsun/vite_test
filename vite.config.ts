import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from "path"

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  plugins: [
    vue(),
    vueJsx()
  ],
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true
  }
})
