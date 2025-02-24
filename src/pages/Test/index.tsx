import { useMyStore } from '@/store'
import { Button, Flex } from 'antd'

function Test() {
  const count = useMyStore(state => state.count)
  const count2 = useMyStore(state => state.count2)
  const nest = useMyStore(state => state.nest)

  const increment = useMyStore(state => state.increment)
  const decrement = useMyStore(state => state.decrement)
  const changeNest = useMyStore(state => state.changeNest)
  return (
    <ALayout>

      <Flex gap={20} className="h-full flex justify-center items-center">
        <div>
          { count }
          111
        </div>
        <div>{ count2 }</div>
        <div>{ nest.num }</div>
        <Button type="primary" onClick={() => increment(1)}>one up</Button>
        <Button type="primary" onClick={() => decrement(1)}>one down</Button>
        <Button type="primary" onClick={() => changeNest(1)}>changeNest</Button>
      </Flex>

      <ARow className="m-60">
        <ACol span={6}>
          <IconLocalConstructionDark className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalFailureDark className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalIdleDark className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalNoAccessDark className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalNoContentDark className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalNoResultDark className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalNotFoundDark className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalSuccessDark className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalConstruction className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalFailure className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalIdle className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalNoAccess className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalNoContent className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalNoResult className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalNotFound className="text-[200px]" />
        </ACol>
        <ACol span={6}>
          <IconLocalSuccess className="text-[200px]" />
        </ACol>
      </ARow>
    </ALayout>
  )
}

export default Test
