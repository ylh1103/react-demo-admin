import type { LineSeriesOption, TreeSeriesOption } from 'echarts/charts'
import type {
  DatasetComponentOption,
  DataZoomComponentOption,
  GridComponentOption,
  LegendComponentOption,
  MarkAreaComponentOption,
  MarkLineComponentOption,
  MarkPointComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  VisualMapComponentOption,
} from 'echarts/components'
// echarts图表组件，使用按需引入
import { ThemeContext } from '@/layouts/themeProvider'
import { LineChart, TreeChart } from 'echarts/charts'
import {
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  MarkAreaComponent,
  MarkLineComponent,
  MarkPointComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { UniversalTransition } from 'echarts/features'
import { SVGRenderer } from 'echarts/renderers'

echarts.use([
  TreeChart,
  LineChart,
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  MarkPointComponent,
  MarkLineComponent,
  UniversalTransition,
  SVGRenderer,
  VisualMapComponent,
  MarkAreaComponent,
])

export type MyChartOption = echarts.ComposeOption<
  | DatasetComponentOption
  | DataZoomComponentOption
  | GridComponentOption
  | LegendComponentOption
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | LineSeriesOption
  | MarkPointComponentOption
  | VisualMapComponentOption
  | MarkAreaComponentOption
  | MarkLineComponentOption
  | TreeSeriesOption
>
export interface MyChartProps {
  option: MyChartOption | null | undefined // 图表配置项
  loading?: boolean
  width?: number | string // 容器宽度，支持数字和字符串，如100和100px，默认100%
  height?: number | string // 容器高度，支持数字和字符串，如100和100px，默认100%
  onInited?: (cInstance: EChartsType) => void //  图表初始化后暴露实例
}

const SChart: React.FC<MyChartProps> = ({ option, width = '100%', height = '100%', loading, onInited }) => {
  const cRef = useRef<HTMLDivElement>(null)
  const cInstance = useRef<EChartsType>(null)
  const { darkMode } = useContext(ThemeContext)

  // 根据主题配置默认样式
  const defaultOptions: MyChartOption = {
    title: {
      left: 'center',
      top: 0,
      textStyle: {
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
    backgroundColor: darkMode ? 'var(--colorBgContainer)' : 'transparent',
    dataZoom: [{ type: 'inside', disabled: true }],
    grid: {
      top: 35,
      bottom: 0,
      right: 12,
      left: 12,
      containLabel: true,
    },
    tooltip: {
      confine: true,
      enterable: true,
    },
  }

  // 显示加载动画效果
  useEffect(() => {
    if (cInstance.current) {
      if (loading) {
        cInstance.current.showLoading('default', { text: '' })
      }
      else {
        cInstance.current.hideLoading()
      }
    }
  }, [loading])

  // 初始化注册组件，监听点击事件，主题变更时重新初始化
  useEffect(() => {
    if (cRef.current) {
      const theme: string = darkMode ? 'dark' : 'light'
      cInstance.current = echarts.init(cRef.current, theme, {
        renderer: 'svg',
      }) as unknown as EChartsType
      onInited?.(cInstance.current)
      // 配置默认配置
      cInstance.current?.setOption(defaultOptions)
      if (option) {
        cInstance.current?.setOption(option)
      }
      return () => {
        cInstance.current?.dispose()
      }
    }
  }, [darkMode])

  // 监听更新 option
  useEffect(() => {
    if (option && cInstance.current) {
      cInstance.current.setOption(option)
    }
  }, [option])

  const size = useSize(cRef)

  useEffect(() => {
    cInstance.current?.resize()
  }, [size])

  return <div ref={cRef} style={{ width, height }} />
}

export default SChart
