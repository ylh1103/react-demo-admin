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
    <Flex gap={20} className="h-full flex justify-center items-center">
      <div>{ count }</div>
      <div>{ count2 }</div>
      <div>{ nest.num }</div>
      <Button type="primary" onClick={() => increment(1)}>one up</Button>
      <Button type="primary" onClick={() => decrement(1)}>one down</Button>
      <Button type="primary" onClick={() => changeNest(1)}>changeNest</Button>
    </Flex>
  )
}

export default Test
