import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // URL del backend
        changeOrigin: true, // Cambia el origen de las solicitudes a coincidir con el backend
        rewrite: (path) => path.replace(/^\/api/, ''), // Opcional: si no tienes el prefijo '/api' en el backend
      }
    }
  }
})
