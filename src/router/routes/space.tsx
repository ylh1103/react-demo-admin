import type { RouteObject } from 'react-router-dom'

export const spaceRoutes: RouteObject[] = [
  {
    path: 'space',
    element: <LazyImport callback={() => import('@/pages/WorkSpace')} />,
    handle: { title: '工作区' },
  },
  {
    path: 'setting',
    element: <LazyImport callback={() => import('@/pages/Test')} />,
    handle: { title: '设置' },
  },
  {
    path: 'demo',
    element: <LazyImport callback={() => import('@/pages/Test')} />,
    handle: { title: '设置' },
  },
]
