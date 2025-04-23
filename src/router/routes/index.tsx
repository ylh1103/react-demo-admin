import type { RouteObject } from 'react-router-dom'
import { spaceRoutes } from './space'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: window.__POWERED_BY_QIANKUN__ ? <Outlet /> : <LazyImport callback={() => import('@/layouts/BaseLayout')} />,
    children: spaceRoutes,
  },
  {
    path: '/login',
    element: <LazyImport callback={() => import('@/pages/Login')} />,
  },
  {
    path: '/403',
    element: <LazyImport callback={() => import('@/pages/Error/403')} />,
  },
  {
    path: '*',
    element: <LazyImport callback={() => import('@/pages/Error/404')} />,
  },
]
