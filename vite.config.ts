import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/HIV_Atlas_WEB',
  build: {
    sourcemap: true,
  },
  worker: {
    format: 'es',
  },
})
