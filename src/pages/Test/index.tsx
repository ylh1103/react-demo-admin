import { ThemeModeSwitch } from '@/layouts/themeProvider'

function Test() {
  return (
    <ALayout>
      <ThemeModeSwitch />
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
