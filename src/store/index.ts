import { create } from 'zustand'

interface State {
  count: number
  count2: number
  nest: {
    num: number
  }
}
interface Action {
  increment: (qty: number) => void
  decrement: (qty: number) => void
  changeNest: (qty: number) => void
}
export const useMyStore = create<State & Action>()(set => ({
  count: 0,
  count2: 2,
  nest: { num: 10 },
  increment: (qty: number) => set(state => ({ count: state.count + qty })),
  decrement: (qty: number) => set(state => ({ count: state.count - qty })),
  changeNest: (qty: number) => set((state) => {
    const num = state.nest.num - qty
    return { nest: { num } }
  }),
}))
