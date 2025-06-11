import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import presetLegacyCompat from '@unocss/preset-legacy-compat'
import { defineConfig, presetIcons, presetMini, presetWind3 } from 'unocss'

export default defineConfig<any>({
  content: {
    // 用于确定是否从构建工具的转换管道中提取特定模块的过滤器
    pipeline: {
      exclude: ['node_modules', 'dist'],
    },
  },
  // 使用默认预设
  presets: [
    presetMini({ dark: 'class' }),
    presetWind3(),
    presetIcons({
      collections: {
        // @iconify-json/lucide图标集合，使用动态导入来提供集合，这样它们将作为异步块进行打包，并在需要时加载
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
        // 本地src/assets/svg-icon下的图标集合
        local: FileSystemIconLoader('./src/assets/svg-icon', (svg) => {
          return svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
        }),
      },
      extraProperties: {
        display: 'inline-block',
      },
    }),
    // 兼容旧版浏览器
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    presetLegacyCompat({ commaStyleColorFunction: true, legacyColorSpace: true }),
  ],
  theme: {
    colors: {
      colorPrimary: 'var(--colorPrimary)',
      colorPrimaryBg: 'var(--colorPrimaryBg)',
      colorPrimaryBgHover: 'var(--colorPrimaryBgHover)',
      colorSplit: 'var(--colorSplit)',
      colorBorder: 'var(--colorBorder)',
      colorBgContainer: 'var(--colorBgContainer)',
      colorTextDescription: 'var(--colorTextDescription)',
      colorBorderSecondary: 'var(--colorBorderSecondary)',
      colorBgTextHover: 'var(--colorBgTextHover)',
      colorText: 'var(--colorText)',
    },
  },
  extendTheme: (theme) => {
    theme.breakpoints.xs = '413px'
  },
  rules: [
    [/^b-card$/, (_, { theme }) => ({ 'border-radius': 'var(--borderRadiusLG)', 'border': `1px solid ${theme.colors.colorBorderSecondary}`, 'background': theme.colors.colorBgContainer })],
    [/^b-radius-lg$/, () => ({ 'border-radius': 'var(--borderRadiusLG)' })],
  ],
  // 简写
  shortcuts: [
    {
      'border-normal': 'border border-solid border-colorSplit',
      'border-bottom': 'border-0 border-b border-solid border-colorBorder',
      'b-card-bold': 'b-card !border-colorBorder',
      'bg-gradient-primary': 'from-colorPrimary to-colorPrimaryBgHover bg-gradient-to-rb',
    },
    {
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center',
      'flex-col': 'flex flex-col',
      'flex-col-center': 'flex-center flex-col',
      'flex-col-between': 'flex-col justify-between',
      'flex-x-center': 'flex justify-center',
      'flex-x-between': 'flex justify-between',
      'flex-y-center': 'flex items-center',
    },
    {
      'nowrap-hidden': 'overflow-hidden whitespace-nowrap',
    },
  ],
})
