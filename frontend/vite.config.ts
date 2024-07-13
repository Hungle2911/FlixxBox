import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
/// <reference types="vitest" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    globals: true,
  },
})