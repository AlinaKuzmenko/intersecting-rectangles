import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default (args) => {
  const generateScopedName = args.mode === 'production'
    ? '[hash:base64:5]'
    : '[local]_[hash:base64:2]';
  return defineConfig({
    plugins: [react()],
    server: {
      port: 3030,
    },
    preview: {
      port: 8080,
    },
    css: {
      modules: {
        generateScopedName,
      },
    }
  })
}
