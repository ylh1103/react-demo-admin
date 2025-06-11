import { createHighlighter } from 'shiki'
import Cards from './component/Cards'

import SectionContainer from './component/SectionContainer'

const list = [
  '只需 6 行代码即可开始跟踪实验、版本管理和可视化',
  '支持 30+ 种主流训练框架集成',
  '实时监控CPU 和 GPU使用情况',
]

const baseItems = [
  {
    name: 'PyTorch/Python',
    icon: 'https://wope.com/images/creating-project/logo-adobe.png',
  },
  {
    name: 'Transformers',
    icon: 'https://wope.com/images/creating-project/logo-adobe.png',
  },
  {
    name: 'Ultralytics',
    icon: 'https://wope.com/images/creating-project/logo-adobe.png',
  },
  {
    name: 'Swift',
    icon: 'https://wope.com/images/creating-project/logo-adobe.png',
  },
  {
    name: 'MMEngine',
    icon: 'https://wope.com/images/creating-project/logo-adobe.png',
  },
  {
    name: 'Keras',
    icon: 'https://wope.com/images/creating-project/logo-adobe.png',
  },
  {
    name: 'Stable Baseline3',
    icon: 'https://wope.com/images/creating-project/logo-adobe.png',
  },
]

const items = [...baseItems, ...baseItems, ...baseItems, ...baseItems]

const step = `import swanlab

# 1. 创建1个新项目
run = swanlab.init(
    project="Qwen3",
    experiment_name="qwen3-dpo",
    config={
        "learning_rate": 1e-4,
        "epoch": 20,
    },
)

# 2. 跟踪与可视化指标
for i in range(20):
    swanlab.log({"loss": 20-i, "acc": i/20})`

async function init() {
  const highlighter = await createHighlighter({
    themes: ['one-dark-pro'],
    langs: ['python'],
  })
  return highlighter
}

function Section2() {
  const ref = useRef(null)
  const [inViewport] = useInViewport(ref)
  const [html, setHtml] = useState('')

  useEffect(() => {
    let highlighter: typeof window.$highlighter
    init().then((ins) => {
      highlighter = ins
      const html = ins.codeToHtml(step, { lang: 'python', themes: { dark: 'one-dark-pro' }, defaultColor: 'dark', colorReplacements: { 'one-dark-pro': { '#282c34': '#0a0118' } } })
      setHtml(html)
    })
    return () => {
      highlighter.dispose()
    }
  }, [])

  return (
    <SectionContainer title="开箱即用" message="轻松集成主流AI训练框架">
      <Cards cols={2}>
        <Cards.Item>
          <div data-view={inViewport} ref={ref} className={`section2_box relative h-full flex-col gap-9 ${inViewport ? 'project_viewport' : ''}`}>
            <div className="flex-col gap-2">
              {list.map(item => (
                <li key={item} className="flex-y-center gap-2">
                  <CirclePrimary size={16} />
                  <p className="text_desc text-base">{item}</p>
                </li>
              ))}
            </div>
            <div className="projects_bg grow">
              <div className="projects_inner h-full flex-col-between">
                {
                  Array.from({ length: 4 }).fill('').map((_, index) => (
                    <div key={index} className="project_row flex">
                      {
                        items.map((item, index2) => (
                          <div key={index2} className="m-1.5 flex-y-center gap-1.5 whitespace-nowrap rounded-full bg-[#ffffff1a] py-1.5 pl-[5px] pr-[9px] text-sm opacity-70">
                            <img className="size-5" src={item.icon} />
                            <span>{item.name}</span>
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute top-[27.2%] z-2 h-40 w-[155%] -left-[37%] -rotate-120">
            <FloatingParticles />
          </div>
          <div className="lights pointer-events-none absolute h-full w-[123%] -left-[8.6%] -top-[47.6%]">
            <div className="light_image left-[9.4%] top-[11.2%] w-[75%] opacity-60 mix-blend-color-dodge -z-1">
              <img src="https://wope.com/images/creating-project/creating-project-box-smart-lights-1.png" />
            </div>
            <div className="light_image left-[12.5%] top-[12.1%] w-[58%] opacity-60 mix-blend-color-dodge -z-2">
              <img src="https://wope.com/images/creating-project/creating-project-box-smart-lights-2.png" />
            </div>
            <div className="light_image left-[13.2%] top-[28.1%] w-[71%] opacity-20 mix-blend-overlay -z-3">
              <img src="https://wope.com/images/creating-project/creating-project-box-smart-lights-3.png" />
            </div>
            <div className="light_image left-[11.2%] top-[21.3%] w-[82%] opacity-32 mix-blend-color-dodge -z-4">
              <img src="https://wope.com/images/creating-project/creating-project-box-smart-lights-4.png" />
            </div>
            <div className="light_image left-[14.5%] top-[15.4%] w-[69%] mix-blend-soft-light -z-5">
              <img src="https://wope.com/images/creating-project/creating-project-box-smart-lights-5.png" />
            </div>
            <div className="light_image left-0 top-0 w-[94%] opacity-50 mix-blend-color-dodge -z-6">
              <img src="https://wope.com/images/creating-project/creating-project-box-smart-lights-6.png" />
            </div>
            <div className="light_image left-[7.6%] top-[7.2%] w-[92%] opacity-40 mix-blend-screen -z-7">
              <img src="https://wope.com/images/creating-project/creating-project-box-smart-lights-7.png" />
            </div>
          </div>
        </Cards.Item>
        <Cards.Item>
          <div className="size-full bg-[#0a0118]" dangerouslySetInnerHTML={{ __html: html }} />
        </Cards.Item>
      </Cards>
    </SectionContainer>
  )
}

export default Section2

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

function FloatingParticles() {
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
    const particleCount = 20
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
    <canvas ref={canvasRef}className="size-full" />
  )
}
