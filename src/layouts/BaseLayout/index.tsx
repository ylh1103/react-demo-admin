
import MyHeader from './MyHeader'
import Slidebar from './Slidebar'
import './style.css'

const BaseLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()

  return (
    <ALayout className="h-screen">
      <Slidebar collapsed={collapsed} />
      <ALayout>
        <MyHeader setCollapsed={setCollapsed} />
        <main key={location.pathname} className="fade w-full flex-1 overflow-auto py-8 px-5 md:px-10">
          <Outlet />
        </main>
      </ALayout>
    </ALayout>
  )
}

export default BaseLayout
