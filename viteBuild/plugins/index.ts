import type { PluginOption } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import removeConsole from 'vite-plugin-remove-console'

import { setupAutoImport } from './auto-import'
import { setupHtmlPlugin } from './html'
import { setupProjectInfo } from './info'
import { setupUnPluginIcon } from './unplugin-icon'

export function setupVitePlugins(_: Env.ImportMeta, buildTime: string) {
  const plugins: PluginOption = [
    react(),
    removeConsole(),
    tailwindcss(),
    setupHtmlPlugin(buildTime),
    setupProjectInfo(),
    setupAutoImport(),
    setupUnPluginIcon(),
    compression({ algorithm: 'brotliCompress' }),
  ]
  return plugins
}
