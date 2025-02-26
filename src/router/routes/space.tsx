import type { RouteObject } from 'react-router'

export const spaceRoutes: RouteObject[] = [
  {
    path: '/space',
    element: <LazyImport callback={() => import('@/pages/WorkSpace')} />,
    handle: { title: '工作区' },
  },
  {
    path: '/setting',
    element: <LazyImport callback={() => import('@/pages/Setting')} />,
    handle: { title: '设置' },
  },
]
