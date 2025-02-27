import type { BuildEnvironmentOptions } from 'vite'

const build: BuildEnvironmentOptions = {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor1: ['react-router-dom', 'react-error-boundary', 'ahooks', 'axios', 'dayjs', 'nprogress', 'zustand', 'zustand-x', 'lodash-es'],
        vendor2: ['antd'],
      },
    },
  },
}

export { build }
