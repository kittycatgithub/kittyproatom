import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: ['riyabawane.site'], // <-- Add your domain here
    host: '0.0.0.0', // Needed if you're serving from a VPS or external IP
    port: 5173
  },
  build: {
    chunkSizeWarningLimit: 1000, // in kB
  },
})
