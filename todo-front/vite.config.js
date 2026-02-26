import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(process.cwd(), '..'), '')
  const apiUrl = env.VITE_API_URL?.replace(/\/$/, '') || `http://localhost:${env.PORT_BACK || 8889}`

  return {
    envDir: resolve(process.cwd(), '..'),
    plugins: [react()],
    server: {
      port: Number(env.PORT_FRONT) || 8080,
      proxy: {
        '/api': {
          target: apiUrl,
          changeOrigin: true,
        },
      },
    },
  }
})
