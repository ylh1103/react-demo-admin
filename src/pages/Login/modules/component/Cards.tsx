import type { ReactNode } from 'react'
import { forEach } from 'lodash-es'
import styles from '../../index.module.less'

interface CardsProps {
  cols?: number
  children?: ReactNode
}

interface CardItemProps {
  children?: ReactNode
  span?: number
}

const CardItem: React.FC<CardItemProps> = ({ children, span = 1 }) => {
  return (
    <div style={{ gridColumn: `span ${span}` }} className="card <lg:col-span-1!">
      <div className="card_content relative px-8 py-3 py-5 <lg:px-6">
        { children }
      </div>
    </div>
  )
}

// 发光卡片
const Cards: React.FC<CardsProps> & { Item: typeof CardItem } = ({ cols = 3, children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const handleMouseMove = (event: MouseEvent) => {
    if (!ref.current)
      return
    const cardElement = ref.current.querySelectorAll<HTMLDivElement>('.card')
    forEach(cardElement, (element) => {
      const rect = element.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      element.style.setProperty('--mouse-x', `${x}px`)
      element.style.setProperty('--mouse-y', `${y}px`)
    })
  }

  useEventListener('mousemove', handleMouseMove, { target: ref })

  return (
    <div ref={ref} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }} className={`${styles.cards_wrapper} grid <lg:gap-4 gap-6 <lg:grid-cols-2! <md:grid-cols-1!`}>
      { children }
    </div>
  )
}

Cards.Item = CardItem

export default Cards
