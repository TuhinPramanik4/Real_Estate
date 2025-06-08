import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
   server: {
    port: 3001,         // Change to any port you want
    host: '0.0.0.0',    // Optional: makes your app accessible from local network
    strictPort: true    // Optional: if true, Vite will throw error if port is taken
  }
})
