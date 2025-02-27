import { RouterProvider } from 'react-router-dom'
import AntdConfig from './layouts/AntdConfig'
import router from './router'

function App() {
  return (
    <AntdConfig>
      <RouterProvider router={router} />
    </AntdConfig>
  )
}

export default App
