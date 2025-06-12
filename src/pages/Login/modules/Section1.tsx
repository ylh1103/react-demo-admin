import GlowingButton from './component/GlowingButton'
import StartBtn from './component/StartBtn'

const login3 = 'https://huly.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-illustration.7100a376.jpg&w=3840&q=75'

function Section1() {
  return (
    <section className="section1 relative h-[1438px] overflow-hidden pt-[184px] <md:h-auto <xl:h-[1078px] <lg:pt-24 <md:pt-[92px] <xl:pt-28">
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
        <div className="mt-11 <lg:mt-7 <md:mt-5 <xl:mt-9">
          <StartBtn showIcon />
        </div>
        <div className="absolute bottom-0 left-6 aspect-[1.067842] max-w-none w-[1574px] <lg:relative <lg:bottom-0 <lg:top-7 <sm:top-1.5 <xl:left-0 <lg:mb-6 <lg:mt-[-36%] <md:mb-[-15%] <md:mt-25 <sm:mb-2 <xs:mt-0 <sm:aspect-auto <lg:w-[120%] <md:w-full <sm:min-h-[350px] <xl:w-[1220px] <md:-top-3 <xl:-bottom-[39px]">
          <div className="absolute bottom-0 z-0 aspect-[1.335187] max-w-none w-[1920px] mix-blend-lighten before:absolute -left-[344px] <lg:bottom-[-2.1%] <lg:left-[-27%] <md:bottom-[5.4%] <md:left-[-34.95%] <sm:bottom-[1.9%] <sm:left-[-36.2%] <xl:bottom-[23px] <xl:left-[-253px] before:top-0 before:z-10 before:hidden <lg:w-[147%] <md:w-[189%] <sm:min-w-[704px] <sm:w-[190%] <xl:w-[1620px] before:h-20 before:w-full before:content-[''] before:from-[#090a0c] before:to-[rgba(9,10,12,0)] before:bg-gradient-to-b <md:before:block">
            <video className="absolute inset-0 h-full w-full" autoPlay loop muted playsInline>
              <source src="https://huly.io/videos/pages/home/hero/hero.mp4?updated=20240607144404" type="video/mp4"></source>
              <source src="https://huly.io/videos/pages/home/hero/hero.webm?updated=20240607144404" type="video/webm"></source>
            </video>
          </div>
          <img src={login3} width={1024} height={569} className="absolute bottom-[141px] left-2 h-auto max-w-full rounded-t-2.5 <md:relative <lg:bottom-[9.5%] <lg:left-0 <md:bottom-auto <sm:bottom-23 <xl:bottom-[138px] <xl:left-9 <xs:bottom-auto <md:mt-[18.7%] <sm:mt-[21.6%] <xs:mt-[83px] <lg:w-[78.4%] <md:min-w-[100.5%] <md:w-[100.5%] <sm:min-w-[376px] <sm:w-full <xl:w-[873px] <lg:rounded-t-md <md:rounded-t" />
        </div>
      </div>
    </section>
  )
}

export default Section1
