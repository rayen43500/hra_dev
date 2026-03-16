import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
}) 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Remplacez 'nom-du-repo' par le nom de votre repository GitHub
export default defineConfig({
  base: '/hra_dev/',
  plugins: [react()],
})