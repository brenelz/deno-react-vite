import { defineConfig } from 'npm:vite'
import react from 'npm:@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});