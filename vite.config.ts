import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig((config) => {
  console.log("🚀 ~ defineConfig ~ config:", config)
  return {
    plugins: [react()],
  }
})
