import type { PluginOption } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import removeConsole from 'vite-plugin-remove-console'

import { setupAutoImport } from './auto-import'
import { setupHtmlPlugin } from './html'
import { setupProjectInfo } from './info'
import { setupUnPluginIcon } from './unplugin-icon'

export function setupVitePlugins(viteEnv: Env.ImportMeta, buildTime: string) {
  const plugins: PluginOption = [
    react(),
    removeConsole(),
    tailwindcss(),
    setupHtmlPlugin(buildTime),
    setupProjectInfo(),
    setupAutoImport(viteEnv),
    setupUnPluginIcon(viteEnv),
  ]
  return plugins
}
