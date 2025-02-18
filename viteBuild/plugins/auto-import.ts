import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';

export const setupAutoImport = (viteEnv: Env.ImportMeta) => {
  const { VITE_ICON_LOCAL_PREFIX, VITE_ICON_PREFIX } = viteEnv;
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
        prefix: VITE_ICON_PREFIX,
        customCollections: [VITE_ICON_LOCAL_PREFIX],
        componentPrefix: VITE_ICON_PREFIX,
        extension: 'tsx',
      }),
      autoImportAntd
    ]
  });
}

// 动态自动导入antd
const autoImportAntd = (componentName: string) => {
  const pattern = /^A[A-Z]/;
  if (pattern.test(componentName)) {
    return { from: 'antd', name: componentName.slice(1) };
  }
  return null;
}
