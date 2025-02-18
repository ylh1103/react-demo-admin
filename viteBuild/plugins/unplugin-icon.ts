import path from 'node:path';
import process from 'node:process';

import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Icons from 'unplugin-icons/vite';
import type { PluginOption } from 'vite';

// 使用iconify图标库，并且自定义src/assets/svg-icon文件夹下svg图标
// 使用约定~icons/{collection}/{icon}导入图标名称(import IconAccountBox from '~icons/mdi/account-box')，并直接将其用作组件
// 也可以自动导入，本项目已在auto-import文件配置自动导入
export const setupUnPluginIcon = (viteEnv: Env.ImportMeta) => {
  const { VITE_ICON_LOCAL_PREFIX } = viteEnv;

  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon');

  const plugins: PluginOption[] = [
    Icons({
      compiler: 'jsx',
      jsx: 'react',
      // 将src/assets/svg-icon自定义图标集local
      // import Icon from '~icons/local/svgName'
      customCollections: {
        [VITE_ICON_LOCAL_PREFIX]: FileSystemIconLoader(localIconPath, (svg) =>
          svg.replace(/^<svg\s/, '<svg fill="currentColor" width="1em" height="1em" ')
        )
      },
      iconCustomizer: (_, __, props) => {
        props.width = '1em';
        props.height = '1em';
        props.fill = 'currentColor';
      }
    })
  ];

  return plugins;
}
