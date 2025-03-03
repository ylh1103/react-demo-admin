import styles from './index.module.less'

const { Sider } = ALayout

interface SlidebarProps {
  collapsed: boolean
}

const menuList = [
  {
    key: '/space',
    label: '工作区',
    icon: <IconLucideOrbit />,
    className: 'text-base',
  },
  {
    key: '/setting',
    label: '设置',
    icon: <IconCarbonSettings />,
    className: 'text-base',
  },
]

const Slidebar: FC<SlidebarProps> = ({ collapsed }) => {
  const navigate = useNavigate()
  const handleMenuSelect: AntDesign.MenuProps['onSelect'] = ({ key }) => {
    navigate(key)
  }

  return (
    <Sider
      data-collapsible={collapsed}
      width={255}
      collapsedWidth={52}
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="group hidden border-0 border-r border-colorSplit border-solid bg-colorBgContainer md:block"
    >
      <AButton size="large" type="text" block style={{ width: 'calc(100% - 8px)' }} className="mx-1 my-2 h-12 flex-center gap-2 border-none p-2 text-base transition-all transition-duration-300 group-data-[collapsible=true]:p-0">
        <AAvatar shape="square" size={40} className="inline-block bg-colorPrimary flex-none" />
        <div style={{ visibility: collapsed ? 'hidden' : 'visible'}} className="flex-y-center gap-2 flex-1-hidden transition-all transition-duration-300">
          <div className="grid flex-1 text-left leading-tight">
            <span className="truncate text-base font-semibold">LL57</span>
            <span className="visible truncate text-sm text-coolgray -mt-1">账务系统空间</span>
          </div>
          <i className='i-lucide:chevrons-down-up' />
        </div>
      </AButton>
      <AButton color="default" variant="filled" size="large" style={{ width: 'calc(100% - 8px)', paddingLeft: collapsed ? 'calc(50% - 13px)' : 12 }} className="m-1 block flex items-center justify-start gap-0 overflow-hidden px-3 text-left line-height-10 transition-all transition-duration-100 hover:border-colorPrimary group-data-[collapsible=true]:block group-data-[collapsible=true]:transition-duration-400">
        <i className="i-lucide:search inline-block" />
        <span className="ml-[10px] text-sm text-colorTextDescription transition-all transition-duration-300 group-data-[collapsible=true]:opacity-0">
          搜索项目...
        </span>
      </AButton>
      <AMenu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ border: 'none' }}
        items={menuList}
        inlineIndent={12}
        onSelect={handleMenuSelect}
      />
    </Sider>
  )
}

export default Slidebar
