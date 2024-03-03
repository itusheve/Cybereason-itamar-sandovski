import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from 'path';
const version =require('./package.json').version || '1.0.0'; // Default to '1.0.0' if version is not provided

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit:true,
    emptyOutDir:false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/index-${version}.js`, // Customize the output filename
        chunkFileNames: `assets/chunk-[name]-${version}.js`,
        assetFileNames: `assets/index-${version}.css`
      }
    }
  },
  plugins: [react()],
})
