import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@types/*': path.resolve(__dirname, './src/types'),
      '@app': path.resolve(__dirname, './src/app'),
      '@assets/*': path.resolve(__dirname, './src/assets'),
      '@modules/*': path.resolve(__dirname, './src/modules'),
      '@projects/*': path.resolve(__dirname, './src/projects'),
      '@styles/*': path.resolve(__dirname, './src/styles'),
    },
  },
});
