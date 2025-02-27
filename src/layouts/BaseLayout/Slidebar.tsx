const { Sider } = ALayout

interface SlidebarProps {
  collapsed: boolean
}

const menuList = [
  {
    key: '/space',
    label: '工作区',
    icon: <IconLucideOrbit className="!text-lg" />,
    className: 'text-base',
  },
  {
    key: '/setting',
    label: '设置',
    icon: <IconCarbonSettings className="!text-lg" />,
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
      collapsedWidth={52}
      width={255}
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="group hidden border-0 border-r border-colorSplit border-solid bg-colorBgContainer md:block"
    >
      <div className="flex-col gap-2 p-1">
        <AButton size="large" type="text" className="h-12 flex-y-center gap-2 p-2 text-base" icon={<AAvatar shape="square" size={40} className="bg-[#A9F76B]" />}>
          <div className="grid flex-1 text-left leading-tight">
            <span className="truncate text-base font-semibold">LL57</span>
            <span className="truncate text-sm text-coolgray -mt-1">账务系统空间</span>
          </div>
          <IconLucideChevronsUpDown />
        </AButton>
        <AButton className="flex items-center justify-start gap-5 overflow-hidden px-[18px] transition-all transition-duration-200 hover:border-colorPrimary group-data-[collapsible=true]:!justify-center group-data-[collapsible=true]:!p-2" color="default" variant="filled" size="large">
          <i className="i-lucide:search" />
          <div className="text-sm text-colorTextDescription group-data-[collapsible=true]:!hidden">搜索项目...</div>
        </AButton>
      </div>
      <AMenu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ border: 'none' }}
        items={menuList}
        inlineIndent={18}
        onSelect={handleMenuSelect}
      />
    </Sider>
  )
}

export default Slidebar
