const links = [
  {
    title: '产品',
    children: [
      {
        name: 'AI训练可视化',
        src: '/',
      },
      {
        name: '日志记录',
        src: '/',
      },
      {
        name: '实验分析',
        src: '/',
      },
      {
        name: '团队协作',
        src: '/',
      },
      {
        name: '模型数据管理',
        src: '/',
      },
    ],
  },
  {
    title: '场景',
    children: [
      {
        name: 'LLM',
        src: '/',
      },
      {
        name: 'AI for Science',
        src: '/',
      },
      {
        name: 'Robot',
        src: '/',
      },
      {
        name: 'Diffusion',
        src: '/',
      },
      {
        name: 'Machine Learning',
        src: '/',
      },
    ],
  },
  {
    title: '资源',
    children: [
      {
        name: '项目总览',
        src: '/',
      },
      {
        name: '文档',
        src: '/',
      },
    ],
  },
]

const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer_top relative flex flex-wrap justify-between gap-20 pb-15 pt-20 <sm:flex-col">
        <div className="flex-col gap-8 items-center">
          <div className="flex-y-center select-none gap-2 text-2xl font-800 <md:text-xl">
            <IconLocalLogo />
            InsightX
          </div>
          <div>
            <p className="text_gradient mb-2 text-center">了解更多，加入招呼群</p>
            <AQRCode className="text-white" type="svg" value="http://localhost:5173/login" bgColor="#fff" icon="/favicon.svg" />
          </div>
        </div>
        {
          links.map(item => (
            <div key={item.title} className="flex-col gap-4 <sm:items-center">
              <div className="text-[#d2d0dd]">{item.title}</div>
              {
                item.children.map(child => (
                  <Link className="text_desc hover:text-[#d2d0dd]!" key={child.name} to={child.src}>
                    {child.name}
                  </Link>
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="text_desc flex-between flex-wrap overflow-hidden <sm:flex-col">
        <div className="<sm:mt-2">Copyright © 2025 InsightX. All rights reserved.</div>
        <div className="text-grey-50 h-12 flex-center bg-[linear-gradient(90deg,#F58041_0%,#AC795C_25.6%,#887064_41.58%,#716A69_56.98%,#61656B_69.44%)] text-right text-transparent line-height-none bg-clip-text">
          <IconLocalHeart className="size-17 -mr-3" />
          <span>Made with passion and InsightX</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
