import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { VantResolver } from '@vant/auto-import-resolver';
import copyFiles from 'rollup-plugin-copy';

const envPrefixes = ['APP_'];
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envVars = loadEnv(mode, process.cwd(), envPrefixes);
  const {
    APP_MONOLITHIC_URL = '',
  } = envVars;
  return {
    server: {
      proxy: {
        '/api': {
          target: APP_MONOLITHIC_URL,
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
        resolvers: [
          VantResolver(),
          ElementPlusResolver(),
        ],
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
      /**
     * as using sqlite, it needed to allow OPFS
     */
      {
        name: 'configure-response-headers',
        configureServer: (server) => {
          server.middlewares.use((_req, res, next) => {
            res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
            res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
            next();
          });
        },
      },
    ],
    optimizeDeps: {
      exclude: ['sqlocal'],
    },
    resolve: {
      alias: {
        '@global': path.join(__dirname, './global'),
        src: path.join(__dirname, './src'),
      },
    },
  };
});
