import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { defineConfig, presetIcons, presetMini, presetWind3 } from 'unocss'

export default defineConfig({
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
        local: FileSystemIconLoader('./assets/svg-icon', svg =>
          svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')),
      },
    }),
  ],
  theme: {
    colors: {
      colorPrimary: 'var(--colorPrimary)',
      colorSplit: 'var(--colorSplit)',
      colorBgContainer: 'var(--colorBgContainer)',
      colorTextDescription: 'var(--colorTextDescription)',
      colorBorderSecondary: 'var(--colorBorderSecondary)',
    },
  },
  // 简写
  shortcuts: [
    {
      'border-normal': 'border border-solid border-colorSplit',
    },
    {
      'flex-1-hidden': 'flex-1 overflow-hidden',
      'flex-center': 'flex justify-center items-center',
      'flex-between': 'flex justify-between items-center',
      'flex-col': 'flex flex-col',
      'flex-col-center': 'flex-center flex-col',
      'flex-col-between': 'flex-col justify-between',
      'flex-col-stretch': 'flex-col items-stretch',
      'flex-x-center': 'flex justify-center',
      'flex-x-between': 'flex justify-between',
      'flex-y-center': 'flex items-center',
      'i-flex-center': 'inline-flex justify-center items-center',
      'i-flex-col': 'flex-col inline-flex',
      'i-flex-col-center': 'flex-col i-flex-center',
      'i-flex-col-stretch': 'i-flex-col items-stretch',
      'i-flex-x-center': 'inline-flex justify-center',
      'i-flex-y-center': 'inline-flex items-center',
    },
    {
      'absolute-bl': 'absolute-lb',
      'absolute-br': 'absolute-rb',
      'absolute-center': 'absolute-lt flex-center size-full',
      'absolute-lb': 'absolute left-0 bottom-0',
      'absolute-lt': 'absolute left-0 top-0',
      'absolute-rb': 'absolute right-0 bottom-0',
      'absolute-rt': 'absolute right-0 top-0',
      'absolute-tl': 'absolute-lt',
      'absolute-tr': 'absolute-rt',
      'fixed-bl': 'fixed-lb',
      'fixed-br': 'fixed-rb',
      'fixed-center': 'fixed-lt flex-center size-full',
      'fixed-lb': 'fixed left-0 bottom-0',
      'fixed-lt': 'fixed left-0 top-0',
      'fixed-rb': 'fixed right-0 bottom-0',
      'fixed-rt': 'fixed right-0 top-0',
      'fixed-tl': 'fixed-lt',
      'fixed-tr': 'fixed-rt',
    },
    {
      'ellipsis-text': 'nowrap-hidden text-ellipsis',
      'nowrap-hidden': 'overflow-hidden whitespace-nowrap',
    },
  ],
})
