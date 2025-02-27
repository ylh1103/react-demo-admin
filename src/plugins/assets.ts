// 提前需要加载的静态资源
import '@/styles/index.css'
import 'virtual:uno.css'

// antd 兼容React19
import '@ant-design/v5-patch-for-react-19'

// 隐藏控制台react-router-dom的升级告警信息
const console_warn = console.warn
console.warn = function (...args) {
  const message = args.join(' ')
  if (typeof message === 'string' && message.includes('React Router Future Flag Warning')) {
    return
  }
  console_warn.apply(console, args)
}
