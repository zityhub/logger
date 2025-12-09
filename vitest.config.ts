import { defineConfig, configDefaults } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.*'],
    exclude: [...configDefaults.exclude],
    environment: 'node',
    testTimeout: 5000,
    isolate: false
  }
})
