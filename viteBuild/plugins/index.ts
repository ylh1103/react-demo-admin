import type { PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import removeConsole from 'vite-plugin-remove-console'
import { setupAutoImport } from './auto-import'

import { setupHtmlPlugin } from './html'
import { setupProjectInfo } from './info'
import { setupUnocss } from './unocss'
import { setupUnPluginIcon } from './unplugin-icon'

export function setupVitePlugins(viteEnv: Env.ImportMeta, buildTime: string) {
  const plugins: PluginOption = [
    react(),
    removeConsole(),
    setupUnocss(),
    setupHtmlPlugin(buildTime),
    setupProjectInfo(viteEnv),
    setupAutoImport(),
    setupUnPluginIcon(),
    compression({ algorithm: 'brotliCompress' }),
  ]
  return plugins
}
