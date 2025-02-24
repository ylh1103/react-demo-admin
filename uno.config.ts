import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  content: {
    // 用于确定是否从构建工具的转换管道中提取特定模块的过滤器
    pipeline: {
      exclude: ['node_modules', 'dist'],
    },
  },
  // 使用默认预设
  presets: [presetWind3()],
  theme: {
    colors: {
      primary: '#1677ff',
    },
  },
})
