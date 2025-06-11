import type { GlobalToken, ThemeConfig } from 'antd'
import { theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { locale } from 'dayjs'
import { ThemeContext } from '../themeProvider'
import 'dayjs/locale/zh-cn'

locale('zh-cn')

interface AntdConfigProps {
  children: React.ReactNode
}

const themeSettings: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  cssVar: { prefix: 'mj' },
  hashed: false,
  components: {
    Layout: {
      headerHeight: 52,
    },
    Menu: {
      iconSize: 18,
      collapsedIconSize: 18,
      collapsedWidth: 52,
    },
  },
  token: {
    colorPrimary: import.meta.env.VITE_PRIMARY_COLOR,
    colorLink: import.meta.env.VITE_PRIMARY_COLOR,
  },
}
function toggleCssDarkMode(darkMode = false) {
  const htmlElementClassList = document.documentElement.classList

  if (darkMode) {
    htmlElementClassList.add('dark')
  }
  else {
    htmlElementClassList.remove('dark')
  }
}

const AntdConfig: FC<AntdConfigProps> = ({ children }) => {
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    toggleCssDarkMode(darkMode)
  }, [darkMode])

  const algorithm = darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
  return (
    <AConfigProvider theme={{ ...themeSettings, algorithm }} locale={zhCN}>
      <AApp className="h-full">
        <ContextHolder />
        {children}
      </AApp>
    </AConfigProvider>

  )
}

export default AntdConfig

function addThemeVarsToGlobal(token: GlobalToken) {
  const css = `
   :root {
      --colorPrimary: ${token.colorPrimary};
      --colorPrimaryBg: ${token.colorPrimaryBg};
      --colorPrimaryBgHover: ${token.colorPrimaryBgHover};
      --colorSplit: ${token.colorSplit};
      --colorBorder: ${token.colorBorder};
      --colorBgContainer: ${token.colorBgContainer};
      --colorTextDescription: ${token.colorTextDescription};
      --colorBorderSecondary: ${token.colorBorderSecondary};
      --colorBgTextHover: ${token.colorBgTextHover};
      --colorFillSecondary: ${token.colorFillSecondary};
      --colorText: ${token.colorText};
      --colorTableHeaderBg: ${token.Table?.headerBg};
      --borderRadiusLG: ${token.borderRadiusLG}px;
    }
  `

  const styleId = 'theme-vars'

  const style = document.querySelector(`#${styleId}`) || document.createElement('style')

  style.id = styleId

  style.textContent = css

  document.head.appendChild(style)
}

function ContextHolder() {
  // 将message、modal、notification挂载到window上
  const { message, modal, notification } = AApp.useApp()
  window.$message = message
  window.$modal = modal
  window.$notification = notification
  const { token } = theme.useToken()

  useEffect(() => {
    addThemeVarsToGlobal(token)
  }, [token])

  return null
}
