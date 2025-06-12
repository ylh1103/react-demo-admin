import section4 from '@/assets/login/section4.webp'
import Cards from './component/Cards'
import SectionContainer from './component/SectionContainer'

function Section4() {
  return (
    <SectionContainer title="实验对比" message="启发实验灵感，离SOTA更近一步">
      <Cards cols={1}>
        <Cards.Item>
          <img src={section4} className="size-full" />
        </Cards.Item>
      </Cards>
    </SectionContainer>
  )
}

export default Section4
