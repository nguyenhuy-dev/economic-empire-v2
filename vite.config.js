import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Honor the PORT env var (used by the preview harness) so the proxy lines up.
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
})
