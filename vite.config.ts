import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置项
      'vue/multi-word-component-names': 0,
      'vue/valid-template-root': 0,
      'vue/html-self-closing': 0,
      catch: false // 禁用eslint缓存
    }),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    styleImport({
      resolves: [VantResolve()]
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    port: 8888,
    proxy: {
      '/api': {
        // 免费的在线REST API
        target: 'http://jsonplaceholder.typicode.com',
        // 把origin修改成目标地址
        // 把localhost:8888 修改成http://jsonplaceholder.typicode.com
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
