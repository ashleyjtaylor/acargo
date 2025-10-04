import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    env: { BASE_URL: 'http://localhost' },
    setupFiles: ['./vitest.setup.ts'],
    environment: 'node',
    globals: true,
    include: ['test/**/*.test.ts'],
    coverage: { reporter: ['text', 'lcov'] }
  }
})
