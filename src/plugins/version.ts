import { Button } from 'antd'
import { createElement } from 'react'

// 检测系统版本更新
export function setupAppVersionNotification() {
  const canAutoUpdateApp = import.meta.env.VITE_AUTOMATICALLY_DETECT_UPDATE === 'Y'

  if (!canAutoUpdateApp)
    return

  let isShow = false

  // 监听浏览器页签切换
  document.addEventListener('visibilitychange', async () => {
    const preConditions = [!isShow, document.visibilityState === 'visible', !import.meta.env.DEV]

    if (!preConditions.every(Boolean))
      return

    const buildTime = await getHtmlBuildTime()

    if (buildTime === BUILD_TIME)
      return

    isShow = true

    window.$notification?.open({
      btn: (() => {
        return createElement(
          'div',
          { style: { display: 'flex', gap: '12px', justifyContent: 'end', width: '325px' } },
          [
            createElement(
              Button,

              {
                key: 'cancel',
                onClick() {
                  window.$notification?.destroy()
                },
              },
              '稍后再说',
            ),
            createElement(
              Button,
              {
                key: 'ok',
                onClick() {
                  location.reload()
                },
                type: 'primary',
              },
              '立即刷新',
            ),
          ],
        )
      })(),
      description: '检测到系统有新版本发布，是否立即刷新页面？',
      message: '系统版本更新通知',
      onClose() {
        isShow = false
      },
    })
  })
}

// 获取当前静态资源构建时间
async function getHtmlBuildTime() {
  const res = await fetch(`/index.html?time=${Date.now()}`, {
    headers: {
      'Cache-Control': 'no-cache',
    },
  })

  const html = await res.text()

  const match = html.match(/<meta name="buildTime" content="(.*)">/)

  const buildTime = match?.[1] || ''

  return buildTime
}
