import { Outlet } from 'react-router'

const { Header, Sider, Content } = ALayout

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

const BaseLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  const handleMenuSelect: AntDesign.MenuProps['onSelect'] = ({ key }) => {
    navigate(key)
  }

  return (
    <ALayout className="h-full">
      <Sider
        data-collapsible={collapsed}
        collapsedWidth={52}
        width={255}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="border-0 border-r border-colorSplit border-solid bg-colorBgContainer"
      >
        <div className="flex-col gap-2 p-2">
          <AButton size="large" type="text" className="flex-y-center h-12 gap-2 p-2 text-base" icon={<AAvatar shape="square" size={40} className="bg-[#A9F76B]" />}>
            <div className="grid flex-1 text-left leading-tight">
              <span className="truncate text-base font-semibold">LL57</span>
              <span className="truncate text-sm text-coolgray -mt-1">账务系统空间</span>
            </div>
            <IconLucideChevronsUpDown />
          </AButton>
          <AButton className="flex" color="default" variant="filled" size="large" icon={<IconLucideSearch />}>
            <div className="flex-1">搜索项目...</div>
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
      <ALayout>
        <Header className="flex-y-center sticky top-0 z-50 gap-2 border-0 border-b border-colorSplit border-solid bg-colorBgContainer p-2">
          <AButton
            className="h-full !w-12"
            type="text"
            icon={<IconLucidePanelLeft className="text-xl" />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content className="mx-auto p-8">
          <Outlet />
        </Content>
      </ALayout>
    </ALayout>
  )
}

export default BaseLayout
