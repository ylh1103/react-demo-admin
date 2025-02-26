import type { FallbackProps } from 'react-error-boundary'
import { useRouteError } from 'react-router'

const { Text } = ATypography

function useRouterCheck() {
  try {
    // 尝试使用一个简单的 Hook

    const error = useRouteError() as Error

    return { error } // 如果没有抛出异常，则支持 Hook
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (error) {
    return false // 如果抛出异常，则不支持 Hook
  }
}

const ErrorBoundaryRender: FC<Partial<FallbackProps>> = ({ error, resetErrorBoundary }) => {
  const hook = useRouterCheck()

  return (
    <div className="size-full min-h-520px overflow-hidden">
      <div className="flex text-[400px]">
        <IconLocalFailure />
      </div>
      <Text code>{hook ? hook.error.message : error.message}</Text>
      <AButton type="primary" onClick={resetErrorBoundary}>重试</AButton>
    </div>
  )
}

export default ErrorBoundaryRender
