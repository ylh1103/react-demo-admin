import type { ReactNode } from 'react'

interface SectionContainerProps {
  title: ReactNode
  message: ReactNode
  children?: ReactNode
}

const SectionContainer: React.FC<SectionContainerProps> = ({ title, message, children }) => {
  return (
    <section className="flex-col gap-5 <lg:gap-4 <md:gap-2">
      <h1 className="text_gradient text-[54px] line-height-none <lg:text-[44px] <md:text-[26px]">
        { title }
      </h1>
      <p className="text_desc text-5 line-height-none <lg:text-4 <md:text-[15px]">
        { message }
      </p>
      <div className="mt-3">
        {children}
      </div>
    </section>
  )
}

export default SectionContainer
