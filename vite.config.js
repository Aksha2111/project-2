import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

   base: "/project-2/", 
  /**server: {
    historyApiFallback: true, // 👈 ensures client-side routing works
  },*/
});
