import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wordle/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/Main.tsx'
    }
  }
})
