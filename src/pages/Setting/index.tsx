const Guider: FC = () => {
  return (
    <div className="h-full flex-col items-center gap-6">
      <div className="lg:text-center">
        <h1 className="my-0 w-full text-xl font-semibold sm:text-2xl">用SwanLab跟踪你的第一次训练</h1>
        {/* <p className="lg:max-w-2xl text-colorTextDescription text-xs sm:text-sm">选择任务或训练框架，按照说明集成SwanLab到你的代码中，或者下载右侧的现成案例。如果你想迁移来自Tensorboard或Wandb上的项目，可查看
          <a target="_blank" href="https://docs.swanlab.cn/zh/guide_cloud/integration/integration-wandb.html">迁移指南</a>。
        </p> */}
      </div>
      <ACard className="w-full">
        <div className="flex-y-center gap-2 text-lg font-600">
          <IconDeviconPython className="text-2xl" />
          <span>Python</span>
        </div>
        <div className="mt-4 flex-col gap-3">
          <p className="text-sm text-[rgba(114,114,121)]">1. ⚙️ 在命令行，使用pip安装swanlab</p>
          <div className="relative rounded-lg bg-[rgb(242,242,243)] px-4 py-3 text-sm">
            <code className="whitespace-pre" style={{ fontFamily: 'ui-monospace' }}>
              pip install swanlab
            </code>
            <AButton className="absolute right-2 top-2" type="text" icon={<div className="i-lucide:copy text-base" />} />
          </div>
          <p className="text-sm text-[rgba(114,114,121)]">2. 📝 登录到swanlab，并在提示时粘贴你的API Key</p>
          <div className="relative rounded-lg bg-[rgb(242,242,243)] px-4 py-3 text-sm">
            <code className="whitespace-pre" style={{ fontFamily: 'ui-monospace' }}>
              swanlab login
            </code>
            <AButton className="absolute right-2 top-2" type="text" icon={<div className="i-lucide:copy text-base" />} />
          </div>
          <p className="text-sm text-[rgba(114,114,121)]">3. 🚀 运行下面的Python脚本，开启第一次训练</p>
          <div className="relative rounded-lg bg-[rgb(242,242,243)] px-4 py-3 text-sm">
            <code className="whitespace-pre" style={{ fontFamily: 'ui-monospace' }}>
              swanlab login
            </code>
            <AButton className="absolute right-2 top-2" type="text" icon={<div className="i-lucide:copy text-base" />} />
          </div>
        </div>
      </ACard>
    </div>
  )
}

export default Guider
