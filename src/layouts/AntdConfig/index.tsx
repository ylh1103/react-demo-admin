interface AntdConfigProps {
  children: React.ReactNode
}

const AntdConfig: FC<AntdConfigProps> = ({ children }) => {
  return (
    <AConfigProvider theme={{ cssVar: { prefix: 'moka' }, hashed: false }}>
      {children}
    </AConfigProvider>
  )
}

export default AntdConfig
