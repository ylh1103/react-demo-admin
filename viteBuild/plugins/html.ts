import type { Plugin } from 'vite'

// 给html添加构建时间meta标签，方便后续版本更新提示
export function setupHtmlPlugin(buildTime: string) {
  const plugin: Plugin = {
    apply: 'serve',
    name: 'html-plugin',
    transformIndexHtml(html) {
      return html.replace('<head>', `<head>\n    <meta name="buildTime" content="${buildTime}">`)
    },
  }

  return plugin
}
