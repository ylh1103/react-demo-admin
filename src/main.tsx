/* eslint-disable no-console */
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import App from './App.tsx'
import ErrorBoundaryRender from './layouts/ErrorBoundaryRender.tsx'
import { setupAppVersionNotification, setupLoading, setupRegister } from './plugins/index.ts'
import './plugins/assets'

let root: Root

function setupApp(props?: any) {
// createRoot挂载前的加载样式
  setupLoading()

  setupRegister()

  // 检测系统版本更新
  setupAppVersionNotification()

  const rootDom = props?.container
    ? props.container.querySelector('#root')
    : document.getElementById('root')

  // if (!rootDom)
  //   return

  root = createRoot(rootDom)

  root.render(
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    <ErrorBoundary fallbackRender={ErrorBoundaryRender}>
      <App />
    </ErrorBoundary>,
  )
}

if (!window.__POWERED_BY_QIANKUN__) {
  setupApp()
}

export async function bootstrap() {
  console.log(`${name} bootstrap`)
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function mount(props: any) {
  console.log(`${name} mount`, props)
  setupApp(props)
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function unmount(props: any) {
  console.log(`${name} unmount`, props)
  root.unmount()
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function update(props: any) {
  console.log(`${name} update`, props)
}
