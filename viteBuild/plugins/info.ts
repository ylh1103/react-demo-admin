import boxen, { type Options as BoxenOptions } from 'boxen';
import { vice } from 'gradient-string';
import type { Plugin } from 'vite';
import { execSync } from 'child_process';


const boxenOptions: BoxenOptions = {
  borderColor: '#646cff',
  borderStyle: 'round',
  padding: 0.5,
  title: 'MokaInsign',
  titleAlignment: 'center'
};

export const setupProjectInfo = (): Plugin => {
  const { nodeMsg, pnpmMsg } =  getEnvInfo()
  const welcomeMessage = vice.multiline(
    `您好! 欢迎使用 MokaInsign, 本项目开发环境推荐node>=18, pnpm>=10 \n${nodeMsg} \n${pnpmMsg}`
  );
  return {
    buildStart() {
      console.log(boxen(welcomeMessage, boxenOptions));
    },
    name: 'vite:buildInfo'
  };
}

const getEnvInfo = () => {
  // 获取 Node.js 版本
  const nodeVersion = process.version;
  const nodeMajorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0], 18);
  
  let nodeMsg = nodeVersion;
    // 校验 Node.js 版本是否 >= 18
  if (nodeMajorVersion >= 18) {
    nodeMsg = `✅ node 版本符合要求：${nodeVersion}`;
  } else {
    nodeMsg = `❌ node 版本过低，当前版本：${nodeVersion}，推荐 >= 18`;
  }

  // 获取 pnpm 版本
  let pnpmVersion;
  try {
    pnpmVersion = execSync('pnpm --version').toString().trim();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    pnpmVersion = 'pnpm 未安装或未找到';
  }

  let pnpmMsg = nodeVersion;
  // 校验 pnpm 版本是否 >= 10
  if (parseFloat(pnpmVersion) >= 10) {
    pnpmMsg = `✅ pnpm 版本符合要求：${pnpmVersion}`;
  } else {
    pnpmMsg = `❌ pnpm 版本过低，当前版本：${pnpmVersion}，推荐 >= 10`;
  }
  return { nodeMsg, pnpmMsg }
}
