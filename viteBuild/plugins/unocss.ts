import path from 'node:path'
import process from 'node:process'
import { presetIcons } from 'unocss'
import UnoCSS from 'unocss/vite'
import { FileSystemIconLoader } from 'unplugin-icons/dist/loaders.js'

// UnoCSS插件导入
export function setupUnocss() {
  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon')

  return UnoCSS({
    presets: [
      presetIcons({
        collections: {
          local: FileSystemIconLoader(localIconPath, svg =>
            svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')),
        },
        extraProperties: {
          display: 'inline-block',
        },
        prefix: `icon-`,
        scale: 1,
        warn: true,
      }),
    ],
  })
}
