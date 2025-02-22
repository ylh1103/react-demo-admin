interface ErrorBaseProps {
  icon: React.ReactNode
}

const ErrorBase: React.FC<ErrorBaseProps> = ({ icon }) => {
  return (
    <div className="size-full flex flex-col justify-center items-center gap-6">
      <div className="text-[400px] text-blue-400">
        {icon}
      </div>
      <AButton type="primary">返回首页</AButton>
    </div>
  )
}

export default ErrorBase
