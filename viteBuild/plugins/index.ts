import react from '@vitejs/plugin-react';
import type { PluginOption } from 'vite';
import removeConsole from 'vite-plugin-remove-console';

import { setupHtmlPlugin } from './html';
import { setupProjectInfo } from './info';

export const setupVitePlugins = (viteEnv: Env.ImportMeta, buildTime: string) => {
  const plugins: PluginOption = [
    react(),
    removeConsole(),
    setupHtmlPlugin(buildTime),
    setupProjectInfo()
  ];
  return plugins;
}
