import { PROJECT_SORT_TYPE } from '@/constants'

const WorkSpace: FC = () => {
  return (
    <ACard className="h-full">
      <div className="mb-4 flex-y-center gap-3 sm:mb-6">
        <AInput className="rounded-full" styles={{ input: { textAlign: 'center', fontSize: 14 } }} size="large" allowClear placeholder="搜索你的项目" suffix={<i className="i-lucide:search text-colorTextDescription" />} />
        <ADropdown menu={{ items: PROJECT_SORT_TYPE }}>
          <AButton size="large" className="text-sm" icon={<>排序:</>}>
            最近更新
            <i className="i-lucide:chevron-down ml-2 text-base" />
          </AButton>
        </ADropdown>
        <AButton size="large" type="primary" className="text-sm" icon={<div className="i-lucide:circle-plus text-base" />}>创建新项目</AButton>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6">
        <a className="h-[120px] flex-col-between border-normal rounded-lg p-5 text-colorTextDescription shadow-[0_4px_10px_-1px_rgba(0,0,0,0.05)] hover:border-colorPrimary">
          <div className="h-[35px] flex gap-2">
            <AAvatar size={35} src="https://swanlab-beta-public-1301372061.cos.ap-nanjing.myqcloud.com/avatars/nrtmstxotafo5py14wu4y9e7mikiw0vo" />
            <div className="flex-col flex-1">
              <span className="h-auto truncate text-base text-black font-700">Smaller_graph</span>
              <span className="truncate text-sm text-colorTextDescription line-height-none">code</span>
            </div>
            <div className="w-9 flex">
              <i className="i-lucide:chart-line size-full text-colorPrimary" />
            </div>
          </div>
          <div className="flex-x-between text-sm">
            <div className="flex-y-center gap-3">
              <div className="flex-y-center gap-1">
                <i className="i-lucide:book-copy" />
                0
              </div>
              <div className="flex-y-center gap-1">
                <i className="i-lucide:flask-conical" />
                30
              </div>
            </div>
            <div className="truncate text-end">更新于2天前</div>
          </div>
        </a>
        <a className="h-[120px] flex-col-between border-normal rounded-lg p-5 text-colorTextDescription shadow-[0_4px_10px_-1px_rgba(0,0,0,0.05)] hover:border-colorPrimary">
          <div className="h-[35px] flex gap-2">
            <AAvatar size={35} src="https://swanlab-beta-public-1301372061.cos.ap-nanjing.myqcloud.com/avatars/nrtmstxotafo5py14wu4y9e7mikiw0vo" />
            <div className="flex-col flex-1">
              <span className="h-auto truncate text-base text-black font-700">Smaller_graph</span>
              <span className="truncate text-sm text-colorTextDescription line-height-none">code</span>
            </div>
            <div className="w-9 flex">
              <i className="i-lucide:chart-line size-full text-colorPrimary" />
            </div>
          </div>
          <div className="flex-x-between text-sm">
            <div className="flex-y-center gap-3">
              <div className="flex-y-center gap-1">
                <i className="i-lucide:book-copy" />
                0
              </div>
              <div className="flex-y-center gap-1">
                <i className="i-lucide:flask-conical" />
                30
              </div>
            </div>
            <div className="truncate text-end">更新于2天前</div>
          </div>
        </a>
        <a className="h-[120px] flex-col-between border-normal rounded-lg p-5 text-colorTextDescription shadow-[0_4px_10px_-1px_rgba(0,0,0,0.05)] hover:border-colorPrimary">
          <div className="h-[35px] flex gap-2">
            <AAvatar size={35} src="https://swanlab-beta-public-1301372061.cos.ap-nanjing.myqcloud.com/avatars/nrtmstxotafo5py14wu4y9e7mikiw0vo" />
            <div className="flex-col flex-1">
              <span className="h-auto truncate text-base text-black font-700">Smaller_graph</span>
              <span className="truncate text-sm text-colorTextDescription line-height-none">code</span>
            </div>
            <div className="w-9 flex">
              <i className="i-lucide:chart-line size-full text-colorPrimary" />
            </div>
          </div>
          <div className="flex-x-between text-sm">
            <div className="flex-y-center gap-3">
              <div className="flex-y-center gap-1">
                <i className="i-lucide:book-copy" />
                0
              </div>
              <div className="flex-y-center gap-1">
                <i className="i-lucide:flask-conical" />
                30
              </div>
            </div>
            <div className="truncate text-end">更新于2天前</div>
          </div>
        </a>
        <a className="h-[120px] flex-col-between border-normal rounded-lg p-5 text-colorTextDescription shadow-[0_4px_10px_-1px_rgba(0,0,0,0.05)] hover:border-colorPrimary">
          <div className="h-[35px] flex gap-2">
            <AAvatar size={35} src="https://swanlab-beta-public-1301372061.cos.ap-nanjing.myqcloud.com/avatars/nrtmstxotafo5py14wu4y9e7mikiw0vo" />
            <div className="flex-col flex-1">
              <span className="h-auto truncate text-base text-black font-700">Smaller_graph</span>
              <span className="truncate text-sm text-colorTextDescription line-height-none">code</span>
            </div>
            <div className="w-9 flex">
              <i className="i-lucide:chart-line size-full text-colorPrimary" />
            </div>
          </div>
          <div className="flex-x-between text-sm">
            <div className="flex-y-center gap-3">
              <div className="flex-y-center gap-1">
                <i className="i-lucide:book-copy" />
                0
              </div>
              <div className="flex-y-center gap-1">
                <i className="i-lucide:flask-conical" />
                30
              </div>
            </div>
            <div className="truncate text-end">更新于2天前</div>
          </div>
        </a>
      </div>
    </ACard>
  )
}

export default WorkSpace
