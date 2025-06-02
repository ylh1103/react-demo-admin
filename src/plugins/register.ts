import NProgress from 'nprogress'
import { createHighlighter } from 'shiki'
// import 'nprogress/nprogress.css'

export async function setupRegister() {
// 配置nprogress
  NProgress.configure({ easing: 'ease', speed: 500 })

  // 挂载到全局
  window.NProgress = NProgress

  // 代码块高亮
  const highlighter = await createHighlighter({
    themes: ['one-dark-pro'],
    langs: ['python'],
  })

  // 挂载到全局
  window.$highlighter = highlighter

  window.addEventListener('unload', () => {
    window.$highlighter.dispose()
  })
}
