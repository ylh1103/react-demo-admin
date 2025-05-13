import styles from './index.module.less'
import GlowingButton from './modules/GlowingButton'

function Login() {
  return (
    <div className={`${styles.login_wrapper} min-h-full bg-[rgb(9,10,12)] text-white`}>
      <header className="absolute left-0 right-0 top-0 z-40 h-16 bg-transparent">
        <div className="m-auto h-full max-w-screen-xl flex-y-center select-none gap-2 px-8 text-2xl font-800">
          <IconLocalLogo />
          InsightX
        </div>
      </header>
      <main>
        <section className="relative h-[1438px] overflow-hidden pt-[184px] <md:h-auto <xl:h-[1078px] <lg:pt-24 <md:pt-[92px] <xl:pt-28">
          <div className="relative m-auto h-full max-w-screen-xl flex-col px-8 <md:px-4">
            <h1 className="relative z-30 max-w-[616px] text-[64px] text-transparent font-700 leading-tight tracking-tighter from-white via-[#d5d8f6] to-[#fdf7fe] from-30% via-80% bg-gradient-to-br bg-clip-text <lg:max-w-[441px] <md:max-w-64 <xl:max-w-[528px] <lg:text-[44px] <md:text-[26px] <xl:text-[54px]">
              <div className="flex gap-4">
                <div>InsightX</div>
                <div className="h-20 overflow-hidden <lg:h-[55px] <md:h-[32.5px] <xl:h-[67.5px]">
                  <div className="word text-red">记录</div>
                  <div className="word text-amber">对比</div>
                  <div className="word text-blue">协作</div>
                  <div className="word text-red">记录</div>
                </div>
              </div>
              <div>训练跟踪与可视化工具</div>
            </h1>
            <p className="relative z-30 mt-5 max-w-md text-[18px] text-gray leading-snug tracking-tight <lg:mt-3.5 <md:mt-3 <xl:mt-4 <md:max-w-[248px] <lg:text-[16px] <md:text-[15px]">
              使用顶尖的MLOps工具，改进AI开发团队模型训练流程
            </p>
            <GlowingButton>
              开始使用
              <IconLocalArrowRight className="h-[9px] w-[17px] text-[#5A250A]" />
            </GlowingButton>
            <div className="absolute bottom-0 left-6 aspect-[1.067842] max-w-none w-[1574px] <lg:relative <lg:bottom-0 <lg:top-7 <sm:top-1.5 <xl:left-0 <lg:mb-6 <lg:mt-[-36%] <md:mb-[-15%] <md:mt-0 <sm:mb-2 <sm:aspect-auto <lg:w-[120%] <md:w-full <sm:min-h-[350px] <xl:w-[1220px] <md:-top-3 <xl:-bottom-[39px]">
              <div className="absolute bottom-0 z-0 aspect-[1.335187] max-w-none w-[1920px] mix-blend-lighten -left-[344px] <lg:bottom-[-2.1%] <lg:left-[-27%] <md:bottom-[5.4%] <md:left-[-34.95%] <sm:bottom-[1.9%] <sm:left-[-36.2%] <xl:bottom-[23px] <xl:left-[-253px] <lg:w-[147%] <md:w-[189%] <sm:min-w-[704px] <sm:w-[190%] <xl:w-[1620px]">
                <video className="absolute inset-0 h-full w-full" autoPlay loop muted playsInline>
                  <source src="https://huly.io/videos/pages/home/hero/hero.mp4?updated=20240607144404" type="video/mp4"></source>
                  <source src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404" type="video/webm"></source>
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Login
