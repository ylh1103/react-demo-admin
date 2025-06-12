import GlowingButton from './GlowingButton'

interface StartBtnProps {
  showSibling?: boolean
  showIcon?: boolean
}

const StartBtn: FC<StartBtnProps> = ({ showIcon, showSibling }) => {
  const handleLogin = () => {
  }

  return (
    <GlowingButton showSibling={showSibling} onClick={handleLogin}>
      开始使用
      {
        showIcon && <IconLocalArrowRight className="h-[9px] w-[17px] text-[#5A250A]" />
      }
    </GlowingButton>
  )
}

export default StartBtn
