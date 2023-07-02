import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wordle/',
  plugins: [react()],
  build: {
    outDir: 'docs', // 배포할 때 생성되는 폴더명을 'docs'로 변경
    rollupOptions: {
      input: '/src/Main.tsx',
    },
  },
});
