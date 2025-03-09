export type ThemeMode = 'light' | 'dark' | 'system'

export interface IThemeConfig {
  themeMode: ThemeMode
}

export const themeConfig: IThemeConfig = {
  themeMode: 'light',
}
