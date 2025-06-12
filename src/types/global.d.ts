interface Window {
  $message?: import('antd/es/message/interface').MessageInstance
  $modal?: import('antd/es/modal/useModal').HookAPI
  $notification?: import('antd/es/notification/interface').NotificationInstance
  NProgress?: import('nprogress').NProgress
  $highlighter: import('shiki').HighlighterGeneric
  __POWERED_BY_QIANKUN__: boolean
}

// 构建时间
declare const BUILD_TIME: string

type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>

type ImportMetaEnv = Env.ImportMeta & {
  BASE_URL: string
  MODE: string
  DEV: string
  PROD: string
  SSR: string
}
type EChartsType = import('echarts').EChartsType
