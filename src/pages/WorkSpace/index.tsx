import { theme } from 'antd'

const { Header, Sider, Content } = ALayout

const WorkSpace: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <ALayout className="h-full">
      <Sider collapsedWidth={52} width={255} trigger={null} collapsible collapsed={collapsed} style={{ background: colorBgContainer }}>
        <div className="flex-col flex gap-2 p-2">
          <AButton size="large" type="text" className="h-12 flex items-center gap-2 p-2 text-base" icon={<AAvatar shape="square" size={40} className="bg-[#A9F76B]" />}>
            <div className="grid flex-1 text-left leading-tight">
              <span className="truncate font-semibold text-base">LL57</span>
              <span className="truncate -mt-1 text-sm text-coolgray">账务系统空间</span>
            </div>
            <IconLucideChevronsUpDown />
          </AButton>
          <AButton className="flex" color="default" variant="filled" size="large" icon={<IconLucideSearch />}>
            <div className="flex: 1">搜索项目...</div>
          </AButton>
        </div>
        <AMenu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: '工作区',
              icon: <IconLucideOrbit className="!text-lg" />,
              className: 'text-base',
            },
            {
              key: '2',
              label: '设置',
              icon: <IconCarbonSettings className="!text-lg" />,
              className: 'text-base',
            },
          ]}
        />
      </Sider>
      <ALayout>
        <Header className="p-2 flex gap-2 items-center" style={{ background: colorBgContainer }}>
          <AButton
            className="h-full !w-12"
            type="text"
            icon={<IconLucidePanelLeft className="text-xl" />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </ALayout>
    </ALayout>
  )
}

export default WorkSpace
