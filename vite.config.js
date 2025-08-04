// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/portfolio/', // ⚠️ if your repo name is portfolio
  base: './', // ✅ for Netlify
  plugins: [react()],
})