import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgLoader from 'vite-svg-loader';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  const baseConfig = {
    base: '/',
    plugins: [
      react({
        jsxRuntime: 'classic',
      }),
      svgLoader(),
    ],
    mode: 'development',
    build: {
      minify: false,
    },
  };

  const customConfig = {
    build: {
      rollupOptions: {
        output: {
          // Vite 기본값인 dynamicImportFunction을 사용하려면 주석 처리하세요.
          // dynamicImportFunction: false,
        },
        plugins: [
          {
            name: 'commonjs-transform',
            transform: (code, id) => {
              if (id.includes('react-phone-input-2')) {
                const isModuleExports = (id) => {
                  try {
                    const module = require(id);
                    if (module?.default) {
                      return false;
                    }
                    return 'auto';
                  } catch (error) {
                    return 'auto';
                  }
                };
                return {
                  code: `module.exports = ${isModuleExports.toString()};`,
                  map: null,
                };
              }
              return code;
            },
          },
        ],
      },
    },
  };

  return isProduction ? { ...baseConfig, ...customConfig } : baseConfig;
});
