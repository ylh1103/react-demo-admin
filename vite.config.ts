import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import { build } from './viteBuild/build'
import { getBuildTime } from './viteBuild/config'
import { setupVitePlugins } from './viteBuild/plugins'

// 使用 defineConfig 工具函数，这样不用 jsdoc 注解也可以获取类型提示
export default defineConfig((config) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // process.cwd() 是一个方法，用于获取 Node.js 进程的当前工作目录
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀
  // 默认情况下只有前缀为 VITE_ 会被加载
  const viteEnv = loadEnv(config.command, process.cwd()) as unknown as Env.ImportMeta
  const buildTime = getBuildTime()
  return {
    // 开发或生产环境服务的公共基础路径，默认/
    base: viteEnv.VITE_BASE_URL,
    // 路径别名
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
    // 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换
    define: {
      BUILD_TIME: JSON.stringify(buildTime),
    },
    // 插件配置
    plugins: setupVitePlugins(viteEnv, buildTime),
    build,
    server: {
      host: '0.0.0.0',
      open: true,
      cors: true,
      // origin: "*",
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
      // 提前转换和缓存文件以进行预热。可以在服务器启动时提高初始页面加载速度，并防止转换瀑布。
      // 请确保只添加经常使用的文件，以免在启动时过载 Vite 开发服务器
      warmup: {
        clientFiles: ['./index.html', './src/{pages,components}/*'],
      },
    },
  }
})
