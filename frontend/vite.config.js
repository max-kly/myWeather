import { backend_url } from './src/assets/backend_url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': backend_url,
    },
  },
})