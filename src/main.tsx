
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryRender from './layouts/ErrorBoundaryRender.tsx';
import './plugins/assets';
import { setupAppVersionNotification, setupDayjs, setupLoading, setupNProgress } from './plugins/index.ts';

const setupApp = () => {
// createRoot挂载前的加载样式
  setupLoading();

// 配置nprogress，将NProgress挂载到全局
  setupNProgress();

// dayjs汉化
  setupDayjs();

// 检测系统版本更新
  setupAppVersionNotification();

  const container = document.getElementById('root');
  if (!container) return;
  const root = createRoot(container);
  root.render(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ErrorBoundary fallbackRender={ErrorBoundaryRender}>
      <App />
    </ErrorBoundary>
  );
}

setupApp();