import vue              from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tsconfigPaths    from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`
    }
  }
})
