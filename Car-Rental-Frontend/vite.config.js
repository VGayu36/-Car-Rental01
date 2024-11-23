import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // Add path to help resolve the directory

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Sets '@' as alias for 'src'
    },
  },
  build: {
    outDir: 'publish', // This sets the output directory to 'publish'
  }
})
