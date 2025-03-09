import type { IThemeConfig } from './slices/theme'
import { createStore } from 'zustand-x'
import { themeConfig } from './slices/theme'

interface StoreState {
  themeConfig: IThemeConfig
}

const store = createStore<StoreState>({ themeConfig }, { name: 'myStore' })

export default store
