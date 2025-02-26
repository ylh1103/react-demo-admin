// react的createRoot挂载前的加载样式
export function setupLoading() {
  const app = document.getElementById('root')
  if (app) {
    app.innerHTML = ''
  }
}
