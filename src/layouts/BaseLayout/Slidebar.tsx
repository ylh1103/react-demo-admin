import { spaceRoutes } from '@/router/routes/space'
import { last } from 'lodash-es'
import { useMatches } from 'react-router-dom'

const { Sider } = ALayout

interface SlidebarProps {
  collapsed: boolean
}
type MenuItem = Required<AntDesign.MenuProps>['items'][number]

const menuList = spaceRoutes.map<MenuItem>((route) => {
  return {
    key: route.path as string,
    label: <Link to={route.path as string}>{route?.handle?.title}</Link>,
    icon: route?.handle?.icon,
  }
})

const Slidebar: FC<SlidebarProps> = ({ collapsed }) => {
  const matchs = useMatches()
  const selectedKey = last(matchs)?.pathname ?? ''
  return (
    <Sider
      data-collapsible={collapsed}
      width='100%'
      collapsedWidth={52}
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="group hidden bg-colorBgContainer md:block"
    >
      <AButton size="large" type="text" block style={{ width: 'calc(100% - 8px)' }} className="mx-1 my-2 h-12 flex-center gap-2 border-none p-2 text-base transition-all transition-duration-300 group-data-[collapsible=true]:p-0">
        <AAvatar shape="square" size={40} className="inline-block flex-none bg-colorPrimary" />
        <div style={{ visibility: collapsed ? 'hidden' : 'visible' }} className="flex-y-center flex-1-hidden gap-2 transition-all transition-duration-300">
          <div className="grid flex-1 text-left leading-tight">
            <span className="truncate text-base font-semibold">LL57</span>
            <span className="visible truncate text-sm text-coolgray -mt-1">账务系统空间</span>
          </div>
          <i className="i-lucide:chevrons-up-down" />
        </div>
      </AButton>
      <AButton color="default" variant="filled" size="large" style={{ width: 'calc(100% - 8px)', paddingLeft: collapsed ? 'calc(50% - 13px)' : 12 }} className="m-1 block flex items-center justify-start gap-0 overflow-hidden px-3 text-left line-height-10 transition-all transition-duration-100 hover:border-colorPrimary group-data-[collapsible=true]:block group-data-[collapsible=true]:transition-duration-400">
        <i className="i-lucide:search inline-block" />
        <span className="ml-[10px] text-sm text-colorTextDescription transition-all transition-duration-300 group-data-[collapsible=true]:opacity-0">
          搜索项目...
        </span>
      </AButton>
      <AMenu
        mode="inline"
        style={{ border: 'none' }}
        items={menuList}
        inlineIndent={12}
        selectedKeys={[selectedKey]}
      />
    </Sider>
  )
}

export default Slidebar
