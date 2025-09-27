import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [
    react()
  ],
  base: "/roadcom/", // 👈 لازم يطابق اسم الريبو بتاعك على GitHub
})
