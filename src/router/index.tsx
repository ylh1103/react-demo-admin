import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

const router = createBrowserRouter(routes, { basename: window.__POWERED_BY_QIANKUN__ ? '/home/insign' : import.meta.env.VITE_BASE_URL })

router.getBlocker('beforeGuard', () => {
  window.NProgress?.start?.()
  return false
})

router.subscribe((state) => {
  if (state.navigation.state === 'idle') {
    window.NProgress?.done?.()
  }
})

export default router
