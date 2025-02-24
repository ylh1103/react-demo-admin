interface AntdConfigProps {
  children: React.ReactNode
}

const AntdConfig: FC<AntdConfigProps> = ({ children }) => {
  return (
    <AConfigProvider theme={{ cssVar: { prefix: 'mj' }, hashed: false }}>
      {children}
    </AConfigProvider>
  )
}

export default AntdConfig
