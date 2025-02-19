import NProgress from 'nprogress';

// 配置nprogress
export const setupNProgress = () => {
  NProgress.configure({ easing: 'ease', speed: 500 });

  // 挂载到全局
  window.NProgress = NProgress;
}
