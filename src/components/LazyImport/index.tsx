import { Skeleton } from 'antd'
import { ComponentType, FC, lazy, Suspense } from 'react'

interface LazyImportProps {
  callback: () => Promise<{ default: ComponentType }>
}

// 路由懒加载组件
export const LazyImport: FC<LazyImportProps> = ({ callback }) => {
  const Component = lazy(callback)
  return (
    <Suspense fallback={<Skeleton style={{padding: 20}} active />}>
      <Component />
    </Suspense>
  )
}