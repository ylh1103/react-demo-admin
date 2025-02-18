
const Page404: React.FC = () => {
    return (
      <div className="size-full flex flex-col justify-center gap-24">
        <div className="text-[400px]">
          <IconLocalNoPermission />
        </div>
        <AButton type="primary">返回首页</AButton>
      </div>
    );
  };
  
  export default Page404;
  