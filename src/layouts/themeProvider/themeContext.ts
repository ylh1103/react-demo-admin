import { DARK_CLASS } from '@/constants'

import { createContext } from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'
export interface ThemeContextType {
  themeMode: ThemeMode
  darkMode: boolean
  setThemeMode: (themeScheme: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'light',
  darkMode: false,
  setThemeMode: () => {},
})

// 切换暗黑模式时给html标签设置类名
export function toggleCssDarkMode(darkMode = false) {
  const htmlElementClassList = document.documentElement.classList

  if (darkMode) {
    htmlElementClassList.add(DARK_CLASS)
  }
  else {
    htmlElementClassList.remove(DARK_CLASS)
  }
}
