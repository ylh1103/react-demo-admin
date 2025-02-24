import type { ThemeConfig } from 'antd'

interface AntdConfigProps {
  children: React.ReactNode
}

const themeConfig: ThemeConfig = {
  cssVar: { prefix: 'mj' },
  hashed: false,
}

const AntdConfig: FC<AntdConfigProps> = ({ children }) => {
  return (
    <AConfigProvider theme={themeConfig}>
      {children}
    </AConfigProvider>
  )
}

export default AntdConfig
