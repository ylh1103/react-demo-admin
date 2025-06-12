import { motion, useSpring, useTransform } from 'motion/react'

interface GlowingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  showSibling?: boolean
}

const GlowingButton: FC<GlowingButtonProps> = ({ children, onClick, showSibling }) => {
  const wrapperDom = useRef<HTMLDivElement>(null)
  const { xTransform, leftGradientOpacity, rightGradientOpacity } = useGlowEffect(wrapperDom)

  return (
    <div className="relative z-10 inline-flex items-center" ref={wrapperDom} onClick={onClick}>
      <motion.div className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] rounded-full will-change-transform -translate-x-1/2 -translate-y-1/2" style={{ opacity: leftGradientOpacity }}>
        <div className="border-button-light relative h-full w-full rounded-full"></div>
      </motion.div>
      <motion.div className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] scale-x-[-1] transform rounded-full will-change-transform -translate-x-1/2 -translate-y-1/2" style={{ opacity: rightGradientOpacity }}>
        <div className="border-button-light relative h-full w-full rounded-full"></div>
      </motion.div>
      <a className="relative z-10 h-10 flex-center gap-1 overflow-hidden border border-white/60 rounded-full border-solid bg-[#d1d1d1] px-18 text-sm text-[#5A250A] font-bold tracking-0.5 transition-colors duration-200 <md:px-12 <md:text-xs hover:text-[#5A250A]">
        <motion.div className="absolute w-[204px] flex-center -z-10" style={{ x: xTransform }}>
          <div className="absolute top-1/2 h-[121px] w-[121px] bg-[radial-gradient(50%_50%_at_50%_50%,#FFFFF5_3.5%,_#FFAA81_26.5%,#FFDA9F_37.5%,rgba(255,170,129,0.50)_49%,rgba(210,106,58,0.00)_92.5%)] -translate-y-1/2"></div>
          <div className="absolute top-1/2 h-[103px] w-[204px] bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px] -translate-y-1/2"></div>
        </motion.div>
        {children}
      </a>
      {
        showSibling && <motion.img src='https://huly.io/_next/static/media/fde311dabe5488a415db9fcd19cf3001.svg' loading='lazy' className='<sm:hidden pointer-events-none absolute -right-[202px] h-10 w-[174px] will-change-transform md:hidden' style={{ opacity: leftGradientOpacity }} />
      }

    </div>
  )
}

export default GlowingButton

const springConfig = {
  initial: {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  },
  leave: {
    stiffness: 100,
    damping: 20,
    mass: 1,
  },
}

function useGlowEffect(ref: React.RefObject<HTMLDivElement | null>) {
  const [center, setCenter] = useState(105)
  const [spring, setSpring] = useState(springConfig.initial)
  const position = useSpring(center, spring)

  const timerRef = useRef<NodeJS.Timeout>(null)

  const handleMouseMove = (event: MouseEvent) => {
    if (!ref.current)
      return

    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
      setSpring(springConfig.initial)
    }

    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    position.set(x - rect.width / 2)
  }

  const handleMouseLeave = () => {
    setSpring(springConfig.leave)
    timerRef.current = setTimeout(() => {
      position.set(center)
      setSpring(springConfig.initial)
    }, 1000)
  }

  useEventListener('mousemove', handleMouseMove, { target: ref })
  useEventListener('mouseleave', handleMouseLeave, { target: ref })

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const newCenter = rect.width / 2 - 6

      if (newCenter !== center) {
        setCenter(newCenter)
        position.set(newCenter)
      }
    }
  }, [])

  const xPoints = [-center, -0.7 * center, -0.3 * center, 0, 0.3 * center, 0.7 * center, center]
  const opacityPoints = [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1]

  const xTransform = useTransform(position, xPoints, xPoints)
  const leftGradientOpacity = useTransform(
    position,
    [0, 0.1 * center, 0.3 * center, 0.5 * center, 0.7 * center, 0.9 * center, center],
    opacityPoints,
  )
  const rightGradientOpacity = useTransform(
    position,
    [-center, -0.9 * center, -0.7 * center, -0.5 * center, -0.3 * center, -0.1 * center, 0],
    opacityPoints.reverse(),
  )

  return { xTransform, leftGradientOpacity, rightGradientOpacity }
}
