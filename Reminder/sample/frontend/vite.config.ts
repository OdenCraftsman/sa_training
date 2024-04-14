import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/school-reminder-demo/',
  // base: '/school-reminder-web-aiso/',
  // https://qiita.com/ginger-yell/items/602091d7010f77fbb47a
  server: {
    host: true,
  },
  plugins: [react(), tsconfigPaths()],
});
