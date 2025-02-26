import type { ThemeConfig } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { locale } from 'dayjs'
import 'dayjs/locale/zh-cn'

locale('zh-cn')

interface AntdConfigProps {
  children: React.ReactNode
}

const themeConfig: ThemeConfig = {
  cssVar: { prefix: 'mj' },
  hashed: false,
  components: {
    Layout: {
      headerHeight: 52,
    },
  },
}

const AntdConfig: FC<AntdConfigProps> = ({ children }) => {
  return (
    <AConfigProvider theme={themeConfig} locale={zhCN}>
      <AApp className="h-full">
        <ContextHolder />
        {children}
      </AApp>
    </AConfigProvider>

  )
}

export default AntdConfig

// 将message、modal、notification挂载到window上
function ContextHolder() {
  const { message, modal, notification } = AApp.useApp()
  window.$message = message
  window.$modal = modal
  window.$notification = notification
  return null
}
