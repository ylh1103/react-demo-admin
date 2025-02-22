import AntdConfig from './layouts/AntdConfig'
import Page403 from './pages/Error/403'
import Page404 from './pages/Error/404'
import Test from './pages/Test'

function App() {
  return (
    <AntdConfig>
      <Test />
      <Page403 />
      <Page404 />
    </AntdConfig>
  )
}

export default App
