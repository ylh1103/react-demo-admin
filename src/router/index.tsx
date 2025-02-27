import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

const router = createBrowserRouter(routes, { basename: import.meta.env.VITE_BASE_URL })

router.dispose()

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
