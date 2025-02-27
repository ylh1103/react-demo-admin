import Slidebar from './Slidebar'

const { Header, Content } = ALayout

const BaseLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <ALayout className="h-screen">
      <Slidebar collapsed={collapsed} />
      <ALayout>
        <Header className="sticky top-0 z-50 flex-y-center gap-2 border-0 border-b border-colorSplit border-solid bg-colorBgContainer p-2">
          <AButton
            className="h-full !w-12"
            type="text"
            icon={<IconLucidePanelLeft className="text-xl" />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </Header>
        <Content className="mx-auto w-full max-w-screen-xl flex-1 overflow-auto py-8">
          <div className="h-full px-5 md:px-10">
            <Outlet />
          </div>
        </Content>
      </ALayout>
    </ALayout>
  )
}

export default BaseLayout
