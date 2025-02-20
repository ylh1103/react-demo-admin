interface AntdConfigProps {
  children: React.ReactNode
}

const AntdConfig: FC<AntdConfigProps> = ({ children }) => {
  return (
    <AConfigProvider theme={{ cssVar: true }}>
      {children}
    </AConfigProvider>
  )
}

export default AntdConfig
