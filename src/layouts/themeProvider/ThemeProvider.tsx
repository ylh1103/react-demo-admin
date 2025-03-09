import type { FC, PropsWithChildren } from 'react'
import type { ThemeMode } from './themeContext'
import { ThemeContext, toggleCssDarkMode } from './themeContext'

const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [localStgThemeMode, setLocalStgThemeMode] = useLocalStorageState<ThemeMode>('insight_theme_mode', { defaultValue: 'light' })
  const [themeMode, setThemeMode] = useState<ThemeMode>(localStgThemeMode || 'light')

  const darkMode = themeMode === 'dark'

  function changeThemeMode(mode: ThemeMode) {
    setThemeMode(mode)
    setLocalStgThemeMode(mode)
  }

  useEffect(() => {
    toggleCssDarkMode(darkMode)
  }, [darkMode])

  // 检测用户是否有将系统的主题色设置为暗色，如果为暗色进行同步
  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_MODE_MEDIA_QUERY)
    const handler = (event: MediaQueryListEvent) => {
      if (themeMode !== 'system')
        return
      changeThemeMode(event.matches ? 'dark' : 'light')
    }
    return () => {
      // 在组件卸载时清理监听器
      mediaQuery.removeEventListener('change', handler)
    }
  }, [])

  return (
    <ThemeContext value={{ darkMode, setThemeMode: changeThemeMode, themeMode }}>
      {children}
    </ThemeContext>
  )
}

export default ThemeProvider
