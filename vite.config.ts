import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import copyFiles from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://monolith:4124',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
    Components({
      resolvers: [VantResolver()],
    }),

    copyFiles({
      targets: [
        {
          src: './manifest.json',
          dest: 'dist',
        },
      ],
      hook: 'writeBundle',
    }),
  ],
  resolve: {
    alias: {
      '@global': path.join(__dirname, './global'),
      src: path.join(__dirname, './src'),
    },
  },
});
