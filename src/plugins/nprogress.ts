import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

// 配置nprogress
export function setupNProgress() {
  NProgress.configure({ easing: 'ease', speed: 500 })

  // 挂载到全局
  window.NProgress = NProgress
}
