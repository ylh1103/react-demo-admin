import Cards from './component/Cards'
import SectionContainer from './component/SectionContainer'

const list = [
  {
    key: '1',
    title: '训练可视化',
    message: '支持折线图、媒体图等多种图表，训练实时可视化进展，辅助分析决策',
    url: '',
  },
  {
    key: '2',
    title: '超参数',
    message: '记录归纳每个实验的超参数，并支持搜索',
    url: '',
  },
  {
    key: '3',
    title: '日志',
    message: '自动收集终端日志',
    url: '',
  },
  {
    key: '4',
    title: '硬件',
    message: '自动记录硬件信息，包括GPU型号、显存，内存容量等',
    url: '',
  },
  {
    key: '5',
    title: '编程环境',
    message: '自动记录Python信息',
    url: '',
  },
  {
    key: '6',
    title: '表格',
    message: '通过集中式实验表格，对比不同实验差异',
    url: '',
  },
]

function Section3() {
  return (
    <SectionContainer title="训练记录" message="训练时的仪表盘，复盘时的备忘录">
      <Cards>
        {list.map(item => (
          <Cards.Item key={item.key}>
            <div key={item.key} className="flex-col gap-1">
              <div className="h-40">
                {/* <img src={card1} className="size-full object-lt" /> */}
              </div>
              <div>
                <div className="text_gradient mb-1 text-lg <lg:text-base">{item.title}</div>
                <span className="text_desc text-sm <md:text-xs">{item.message}</span>
              </div>
            </div>
          </Cards.Item>
        ))}
      </Cards>
    </SectionContainer>
  )
}

export default Section3
