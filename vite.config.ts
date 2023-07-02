import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wordle/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['src/Main.tsx']
    }
  }  
})