import type { ThemeMode } from './themeContext'
import { find } from 'lodash-es'
import { ThemeContext } from './themeContext'

const items: AntDesign.MenuProps['items'] = [
  {
    key: 'light',
    label: '浅色',
    icon: <div className="i-lucide:sun !text-xl" />,
  },
  {
    key: 'dark',
    label: '深色',
    icon: <div className="i-lucide:moon !text-xl" />,
  },
  {
    key: 'system',
    label: '跟随系统',
    icon: <IconIcOutlineHdrAuto className="!text-xl" />,
  },
]

function ThemeModeSwitch() {
  const { darkMode, themeMode, setThemeMode } = useContext(ThemeContext)
  const iconMatch = find(items, item => item?.key === themeMode)

  const icon = (iconMatch && 'icon' in iconMatch) ? iconMatch?.icon : null

  const toggleTheme: AntDesign.MenuProps['onClick'] = ({ domEvent, key }) => {
    // 检测用户的系统是否被开启了动画减弱功能，如果开启则不添加过渡动画
    const isAppearanceTransition = !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      setThemeMode(key as ThemeMode)
      return
    }
    const transition = document.startViewTransition(() => {
      setThemeMode(key as ThemeMode)
    })

    console.log('🚀 ~ ThemeModeSwitch ~ darkMode:', darkMode)
    if (themeMode === 'system')
      return

    // 半径
    const { clientX, clientY } = domEvent as React.MouseEvent<HTMLElement>
    const endRadius = Math.hypot(Math.max(clientX, innerWidth - clientX), Math.max(clientY, innerHeight - clientY))

    transition.ready.then(() => {
      // 根据圆心和半径画圆
      const clipPath = [`circle(0px at ${clientX}px ${clientY}px)`, `circle(${endRadius}px at ${clientX}px ${clientY}px)`]
      document.documentElement.animate(
        {
          clipPath: darkMode ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: darkMode ? '::view-transition-old(root)' : '::view-transition-new(root)',
        },
      )
    })
  }
  return (
    <ADropdown menu={{ items, onClick: toggleTheme }} trigger={['click']}>
      <AButton shape="circle" type="text" size="large" icon={icon} className="mr-2" />
    </ADropdown>
  )
}

export default ThemeModeSwitch
