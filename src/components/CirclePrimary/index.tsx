interface CirclePrimaryProps {
  size?: number
}

// 根据主题色生成的圆形
const CirclePrimary: React.FC<CirclePrimaryProps> = ({ size = 24 }) => {
  return (
    <div style={{ width: size, height: size }} className="bg-gradient-primary size-5 shrink-0 rounded-full" />
  )
}

export default CirclePrimary
