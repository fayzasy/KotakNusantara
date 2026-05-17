import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Ganti sesuai nama repo GitHub kamu
  base: '/KotakNusantara/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:     resolve(__dirname, 'index.html'),
        logTugas: resolve(__dirname, 'log-tugas.html'),
      },
    },
  },
})
