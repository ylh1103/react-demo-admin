// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  react: true,
  formatters: {
    css: true,
    html: true,
    svg: true,
    markdown: true,
    prettierOptions: true,
  },
})
