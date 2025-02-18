import react from '@vitejs/plugin-react';
import type { PluginOption } from 'vite';
import removeConsole from 'vite-plugin-remove-console';
import tailwindcss from '@tailwindcss/vite'

import { setupHtmlPlugin } from './html';
import { setupProjectInfo } from './info';
import { setupAutoImport } from './auto-import';
import { setupUnPluginIcon } from './unplugin-icon';

export const setupVitePlugins = (viteEnv: Env.ImportMeta, buildTime: string) => {
  const plugins: PluginOption = [
    react(),
    removeConsole(),
    tailwindcss(),
    setupHtmlPlugin(buildTime),
    setupProjectInfo(),
    setupAutoImport(viteEnv),
    setupUnPluginIcon(viteEnv)
  ];
  return plugins;
}
