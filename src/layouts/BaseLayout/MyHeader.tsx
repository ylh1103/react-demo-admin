import { ThemeModeSwitch } from '../themeProvider'

const { Header } = ALayout
interface HeaderProps {
  setCollapsed: SetStateAction<boolean>;
}

const MyHeader: FC<HeaderProps> = ({ setCollapsed }) => {
  return (
    <Header className="sticky top-0 z-50 flex-between gap-2 border-0 border-b border-colorSplit border-solid bg-colorBgContainer p-2">
      <AButton
        className="h-full !w-12"
        type="text"
        icon={<IconLucidePanelLeft className="text-xl" />}
        onClick={() => setCollapsed((state) => !state)}
      />
      <ThemeModeSwitch />
    </Header>
  );
};

export default MyHeader;
