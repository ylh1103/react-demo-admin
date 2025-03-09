// import { KeepAlive, useKeepAliveRef } from 'keepalive-for-react'
// import KeepAliveRouteOutlet from 'keepalive-for-react-router'
import Slidebar from './Slidebar'
import './style.css'

const { Header, Content } = ALayout

const BaseLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  // const aliveRef = useKeepAliveRef()
  const location = useLocation()
  // 确定哪个路由组件处于活动状态
  // const currentCacheKey = useMemo(() => {
  //   return location.pathname + location.search
  // }, [location.pathname, location.search])

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
            <div key={location.pathname} className="fade">
              <Outlet />
            </div>
            {/* <KeepAlive aliveRef={aliveRef} activeCacheKey={currentCacheKey} max={18} cacheNodeClassName="fade-slide">
              <Outlet />
            </KeepAlive> */}
            {/* <KeepAliveRouteOutlet transition viewTransition cacheNodeClassName="fade" /> */}
          </div>
        </Content>
      </ALayout>
    </ALayout>
  )
}

export default BaseLayout
