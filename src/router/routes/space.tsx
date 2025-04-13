import type { RouteObject } from 'react-router-dom'

export const spaceRoutes: RouteObject[] = [
  {
    path: '/space',
    element: <LazyImport callback={() => import('@/pages/WorkSpace')} />,
    handle: { title: '工作区', icon: <i className="i-lucide-orbit" /> },
  },
  {
    path: '/setting',
    element: <LazyImport callback={() => import('@/pages/Setting')} />,
    handle: { title: '设置', icon: <i className="i-lucide-settings" /> },
  },
]
