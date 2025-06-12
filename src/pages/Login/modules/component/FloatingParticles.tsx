
// 定义粒子接口
interface Particle {
  x: number // x坐标
  y: number // y坐标
  size: number // 粒子大小
  speedX: number // x轴速度
  speedY: number // y轴速度
  color: string // 粒子颜色（带透明度）
  opacity: number // 粒子颜色（带透明度）
}

interface FloatingParticlesProps {
  count?: number //粒子数
}

const FloatingParticles: FC<FloatingParticlesProps> = ({ count = 20 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  // 初始化粒子
  const initParticles = (count: number, width: number, height: number) => {
    const particles: Particle[] = []

    for (let i = 0; i < count; i++) {
      // 粒子属性
      const size = 1.3
      const x = Math.random() * width
      const y = Math.random() * height
      const speedX = Math.random() * 0.2 - 0.1
      const speedY = Math.random() * 0.2 - 0.1

      // 使用透明渐变颜色 - rgba格式
      const opacity = Math.random() * 0.6 + 0.2 // 透明度在0.2-0.8之间

      const color = `rgba(255, 255, 255, 1)`

      particles.push({ x, y, size, speedX, speedY, color, opacity })
    }

    particlesRef.current = particles
  }

  // 绘制粒子
  const drawParticles = () => {
    const canvas = canvasRef.current
    if (!canvas)
      return

    const ctx = canvas.getContext('2d')
    if (!ctx)
      return

    const { width, height } = canvas

    // 清除画布
    ctx.clearRect(0, 0, width, height)

    // 绘制所有粒子
    particlesRef.current.forEach((particle) => {
      ctx.globalAlpha = particle.opacity + Math.random() * 0.02 - 0.01
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()

      // 更新粒子位置
      particle.x += particle.speedX
      particle.y += particle.speedY
      // 边界检测 - 粒子从一边出去从另一边回来
      if (particle.x > width + particle.size)
        particle.x = -particle.size
      else if (particle.x < -particle.size)
        particle.x = width + particle.size

      if (particle.y > height + particle.size)
        particle.y = -particle.size
      else if (particle.y < -particle.size)
        particle.y = height + particle.size
    })

    // 继续动画循环
    animationRef.current = requestAnimationFrame(drawParticles)
  }

  // 组件挂载时初始化
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas)
      return

    // 设置canvas尺寸为容器大小
    const updateCanvasSize = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    updateCanvasSize()

    // 初始化粒子（数量根据画布大小调整）
    const particleCount = count
    initParticles(particleCount, canvas.width, canvas.height)

    // 开始动画
    drawParticles()

    // 窗口大小改变时调整canvas尺寸
    const handleResize = () => {
      updateCanvasSize()
      initParticles(particleCount, canvas.width, canvas.height)
    }

    window.addEventListener('resize', handleResize)

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef}className="size-full absolute top-0 left-0" />
  )
}

export default FloatingParticles
