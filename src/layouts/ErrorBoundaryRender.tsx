import { useRouteError } from "react-router";
import type { FallbackProps } from 'react-error-boundary'

const { Text } = ATypography;

const useRouterCheck = () => {
  try {
    // 尝试使用一个简单的 Hook

    const error = useRouteError() as Error;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const nav = useNavigate()

    const update = () => {
      nav(0)
    }

    return { update, error }; // 如果没有抛出异常，则支持 Hook
  } catch (error) {
    return false; // 如果抛出异常，则不支持 Hook
  }
}

const ErrorBoundaryRender: FC<Partial<FallbackProps>> = ({ error, resetErrorBoundary }) => {
  const hook = useRouterCheck()

  return (
    <div className="size-full min-h-520px overflow-hidden">
      <div className="flex text-[400px]">
        <IconLocalError />
      </div>
      <Text code>{hook ? hook.error.message : error.message}</Text>
      <AButton type='primary' onClick={hook ? hook.update : resetErrorBoundary} >重试</AButton>
    </div>
  );
};

export default ErrorBoundaryRender;
