import FloatingParticles from './component/FloatingParticles'
import StartBtn from './component/StartBtn'

const Section5: React.FC = () => {
  return (
    <section className="section5_box relative flex-center">
      <div className='img_animation'>
        <div className='h-[202px] mb-[361px]'>

        </div>
      </div>
      <FloatingParticles count={50} />
      <div className="flex-col-center">
        <span className="text-25 <lg:text-20"><IconLocalLogo /></span>
        <div className="text_gradient mt-2 text-[54px] <lg:text-[44px] <md:text-[26px]">每次训练都值得被记录</div>
        <div className="mt-5 flex gap-8 <sm:flex-col <sm:gap-4">
          <StartBtn showSibling />
          <a className="relative h-10 flex-y-center justify-center gap-2 border border-white/10 rounded-full border-solid bg-[transparent] px-18 text-sm text-white font-bold tracking-0.5 transition-all transition-colors duration-200 hover:border-white/15 <md:px-12 <md:text-xs hover:text-white">
            <IconLocalFire className="text-[22px]" />
            帮助文档
          </a>
        </div>
      </div>
    </section>
  )
}

export default Section5
