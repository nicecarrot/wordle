import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    process.env.MODE !== 'production' ? react({
      jsxRuntime: 'classic',
    }) : react(),
    svgLoader(),
  ],
  mode: "development",
  build: {
    minify: false,
  }
});
