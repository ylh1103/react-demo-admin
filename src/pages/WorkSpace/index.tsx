import { PROJECT_SORT_TYPE } from '@/constants'

const WorkSpace: FC = () => {
  return (
    <ACard className="h-full">
      <div className="flex-y-center mb-4 gap-3 sm:mb-6">
        <AInput className="rounded-full" styles={{ input: { textAlign: 'center', fontSize: 14 } }} size="large" allowClear placeholder="搜索你的项目" suffix={<i className="text-colorTextDescription i-lucide:search" />} />
        <ADropdown menu={{ items: PROJECT_SORT_TYPE }}>
          <AButton size="large" className="text-sm" icon="排序:">
            最近更新
            <i className="i-lucide:chevron-down ml-2 text-base" />
          </AButton>
        </ADropdown>
        <AButton size="large" type="primary" className="text-sm" icon={<div className="i-lucide:circle-plus text-base" />}>创建新项目</AButton>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6">
        <a className="flex-col-between h-[120px] border-normal hover:border-colorPrimary rounded-lg p-5 shadow-[0_4px_10px_-1px_rgba(0,0,0,0.05)] text-colorTextDescription">
          <div className="h-[35px] flex gap-2">
            <AAvatar size={35} src="https://swanlab-beta-public-1301372061.cos.ap-nanjing.myqcloud.com/avatars/nrtmstxotafo5py14wu4y9e7mikiw0vo" />
            <div className="flex-col flex-1">
              <span className="truncate font-700 text-base text-black h-auto">Smaller_graph</span>
              <span className="text-colorTextDescription truncate text-sm line-height-none">code</span>
            </div>
            <div className="w-9 flex">
              <i className='i-lucide:chart-line text-colorPrimary size-full' />
            </div>
          </div>
          <div className='flex-x-between text-sm'>
            <div className='flex-y-center gap-3'>
              <div className='flex-y-center gap-1'>
                <i className='i-lucide:book-copy' />
                0
              </div>
              <div className='flex-y-center gap-1'>
                <i className='i-lucide:flask-conical' />
                30
              </div>
            </div>
            <div className='truncate text-end'>更新于2天前</div>
          </div>
        </a>
        <a className="flex-col-between h-[120px] border-normal hover:border-colorPrimary rounded-lg p-5 shadow-[0_4px_10px_-1px_rgba(0,0,0,0.05)] text-colorTextDescription">
          <div className="h-[35px] flex gap-2">
            <AAvatar size={35} src="https://swanlab-beta-public-1301372061.cos.ap-nanjing.myqcloud.com/avatars/nrtmstxotafo5py14wu4y9e7mikiw0vo" />
            <div className="flex-col flex-1">
              <span className="truncate font-700 text-base text-black h-auto">Smaller_graph</span>
              <span className="text-colorTextDescription truncate text-sm line-height-none">code</span>
            </div>
            <div className="w-9 flex">
              <i className='i-lucide:chart-line text-colorPrimary size-full' />
            </div>
          </div>
          <div className='flex-x-between text-sm'>
            <div className='flex-y-center gap-3'>
              <div className='flex-y-center gap-1'>
                <i className='i-lucide:book-copy' />
                0
              </div>
              <div className='flex-y-center gap-1'>
                <i className='i-lucide:flask-conical' />
                30
              </div>
            </div>
            <div className='truncate text-end'>更新于2天前</div>
          </div>
        </a>
        <a className="flex-col-between h-[120px] border-normal hover:border-colorPrimary rounded-lg p-5 shadow-[0_4px_10px_-1px_rgba(0,0,0,0.05)] text-colorTextDescription">
          <div className="h-[35px] flex gap-2">
            <AAvatar size={35} src="https://swanlab-beta-public-1301372061.cos.ap-nanjing.myqcloud.com/avatars/nrtmstxotafo5py14wu4y9e7mikiw0vo" />
            <div className="flex-col flex-1">
              <span className="truncate font-700 text-base text-black h-auto">Smaller_graph</span>
              <span className="text-colorTextDescription truncate text-sm line-height-none">code</span>
            </div>
            <div className="w-9 flex">
              <i className='i-lucide:chart-line text-colorPrimary size-full' />
            </div>
          </div>
          <div className='flex-x-between text-sm'>
            <div className='flex-y-center gap-3'>
              <div className='flex-y-center gap-1'>
                <i className='i-lucide:book-copy' />
                0
              </div>
              <div className='flex-y-center gap-1'>
                <i className='i-lucide:flask-conical' />
                30
              </div>
            </div>
            <div className='truncate text-end'>更新于2天前</div>
          </div>
        </a>
        <a className="flex-col-between h-[120px] border-normal hover:border-colorPrimary rounded-lg p-5 shadow-[0_4px_10px_-1px_rgba(0,0,0,0.05)] text-colorTextDescription">
          <div className="h-[35px] flex gap-2">
            <AAvatar size={35} src="https://swanlab-beta-public-1301372061.cos.ap-nanjing.myqcloud.com/avatars/nrtmstxotafo5py14wu4y9e7mikiw0vo" />
            <div className="flex-col flex-1">
              <span className="truncate font-700 text-base text-black h-auto">Smaller_graph</span>
              <span className="text-colorTextDescription truncate text-sm line-height-none">code</span>
            </div>
            <div className="w-9 flex">
              <i className='i-lucide:chart-line text-colorPrimary size-full' />
            </div>
          </div>
          <div className='flex-x-between text-sm'>
            <div className='flex-y-center gap-3'>
              <div className='flex-y-center gap-1'>
                <i className='i-lucide:book-copy' />
                0
              </div>
              <div className='flex-y-center gap-1'>
                <i className='i-lucide:flask-conical' />
                30
              </div>
            </div>
            <div className='truncate text-end'>更新于2天前</div>
          </div>
        </a>
      </div>
    </ACard>
  )
}

export default WorkSpace
