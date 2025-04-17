
import MyHeader from './MyHeader'
import Slidebar from './Slidebar'
import './style.css'

const BaseLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const [sizes, setSizes] = useState<(number | string)[]>([255]);

  return (
    <ASplitter className="h-screen" onResize={setSizes}>
      <ASplitter.Panel defaultSize={255} size={sizes[0]}>
        <Slidebar collapsed={collapsed} />
      </ASplitter.Panel>
      <ASplitter.Panel size={sizes[1]} >
        <ALayout className='h-full'>
          <MyHeader setCollapsed={setCollapsed} />
          <main key={location.pathname} className="fade w-full flex-1 overflow-auto py-8 px-5 md:px-10">
            <Outlet />
          </main>
        </ALayout>
      </ASplitter.Panel>
    </ASplitter>
  )
}

export default BaseLayout
