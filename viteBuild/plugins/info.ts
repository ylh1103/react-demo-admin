import boxen, { type Options as BoxenOptions } from 'boxen';
import { vice } from 'gradient-string';
import type { Plugin } from 'vite';
import { execSync } from 'child_process';


const boxenOptions: BoxenOptions = {
  borderColor: '#646cff',
  borderStyle: 'round',
  padding: 0.5,
  title: '您好! 欢迎使用 MokaInsign',
  titleAlignment: 'center'
};

// 在开发终端打印项目信息
export const setupProjectInfo = (): Plugin => {
  const { nodeMsg, pnpmMsg } =  getEnvInfo()
  const welcomeMessage = vice.multiline(
    `🔔 本项目技术栈：Vite 6 + React 19 + React Router 7 + TypeScript 5 + Tailwindcss 4 + Ant Design 5\n🔔 开发环境推荐：node>=20, pnpm>=10\n--------------------------------------------\n${nodeMsg}\n${pnpmMsg}`
  );
  return {
    buildStart() {
      console.log(boxen(welcomeMessage, boxenOptions));
    },
    name: 'vite:buildInfo'
  };
}

// 获取当前环境node和pnpm版本信息
const getEnvInfo = () => {
  // 获取 Node.js 版本
  const nodeVersion = process.version;
  const nodeMajorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0]);
  
  let nodeMsg = nodeVersion;
    // 校验 Node.js 版本是否 >= 20
  if (nodeMajorVersion >= 20) {
    nodeMsg = `✅ node 版本符合要求：${nodeVersion}`;
  } else {
    nodeMsg = `❌ node 版本过低，当前版本：${nodeVersion}，推荐 >= 20`;
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
