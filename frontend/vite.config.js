import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// In dev, the frontend calls relative paths (/api/..., /svc/...) and Vite
// forwards them to the backend services running locally. In Docker/Kubernetes
// nginx does the same job (see nginx.conf.template).
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/orders': 'http://localhost:8080',
      '/api/products': 'http://localhost:8081',
      '/svc/orders': {
        target: 'http://localhost:8080',
        rewrite: () => '/',
      },
      '/svc/products': {
        target: 'http://localhost:8081',
        rewrite: () => '/',
      },
    },
  },
})
