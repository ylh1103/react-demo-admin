import type { RouteObject } from 'react-router'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LazyImport callback={() => import('@/pages/WorkSpace')} />,
  },
]
