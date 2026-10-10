import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // Cambiado a ruta relativa para evitar errores 404 en Netlify
})
