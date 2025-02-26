import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App.tsx'
import ErrorBoundaryRender from './layouts/ErrorBoundaryRender.tsx'
import { setupAppVersionNotification, setupLoading, setupNProgress } from './plugins/index.ts'
import './plugins/assets'

function setupApp() {
// createRoot挂载前的加载样式
  setupLoading()

  // 配置nprogress，将NProgress挂载到全局
  setupNProgress()

  // 检测系统版本更新
  setupAppVersionNotification()

  const rootDom = document.getElementById('root')
  if (!rootDom)
    return
  const root = createRoot(rootDom)
  root.render(
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    <ErrorBoundary fallbackRender={ErrorBoundaryRender}>
      <App />
    </ErrorBoundary>,
  )
}

setupApp()
