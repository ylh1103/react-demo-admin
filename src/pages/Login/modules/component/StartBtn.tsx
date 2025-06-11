import GlowingButton from './GlowingButton'

function StartBtn() {
  const handleLogin = () => {
  }

  return (
    <div className="mt-11 <lg:mt-7 <md:mt-5 <xl:mt-9">
      <GlowingButton onClick={handleLogin}>
        开始使用
        <IconLocalArrowRight className="h-[9px] w-[17px] text-[#5A250A]" />
      </GlowingButton>
    </div>

  )
}

export default StartBtn
