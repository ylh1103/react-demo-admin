import AntdConfig from '@/layouts/AntdConfig'
import { ThemeProvider } from '@/layouts/themeProvider'
import router from '@/router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      <AntdConfig>
        <RouterProvider router={router} />
      </AntdConfig>
    </ThemeProvider>
  )
}

export default App
