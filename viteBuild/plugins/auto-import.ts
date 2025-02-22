import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'

export function setupAutoImport() {
  return AutoImport({
    // 自动导出src下hooks和components文件
    dirs: ['src/hooks/**', 'src/components/**'],
    // 生成的类型声明文件
    dts: 'src/types/auto-imports.d.ts',
    // 自动导出的库
    imports: ['react', 'react-router', 'ahooks', { from: 'react', imports: ['FC'], type: true }],
    // 导出文件类型
    include: [/\.[tj]sx?$/],
    // 搭配eslint使用，会生成.eslintrc-auto-import.json文件
    eslintrc: { enabled: true },

    // 自定义解析器，自动导入使用的antd和iconify组件
    resolvers: [
      IconsResolver({
        // 自动导入图标前缀
        prefix: 'icon',
        componentPrefix: 'icon',
        // 本地图标集合名
        customCollections: ['local'],
        extension: 'tsx',
      }),
      autoImportAntd,
    ],
  })
}

// 动态自动导入antd
function autoImportAntd(componentName: string) {
  const pattern = /^A[A-Z]/
  if (pattern.test(componentName)) {
    return { from: 'antd', name: componentName.slice(1) }
  }
  return null
}
