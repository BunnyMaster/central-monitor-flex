import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import fs from 'fs';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { loadEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';

import { buildEnv } from './buildEnv';

export const root: string = process.cwd();

/**
 * @description 根据可选的路径片段生成一个新的绝对路径
 * @param dir 路径片段，默认`build`
 * @param metaUrl 模块的完整`url`，如果在`build`目录外调用必传`import.meta.url`
 */
// @ts-ignore
export const pathResolve = (dir = '.', metaUrl = import.meta.url) => {
  // 当前文件目录的绝对路径
  const currentFileDir = dirname(fileURLToPath(metaUrl));
  // build 目录的绝对路径
  const buildDir = resolve(currentFileDir, 'build');
  // 解析的绝对路径
  const resolvedPath = resolve(currentFileDir, dir);
  // 检查解析的绝对路径是否在 build 目录内
  if (resolvedPath.startsWith(buildDir)) {
    // 在 build 目录内，返回当前文件路径
    return fileURLToPath(metaUrl);
  }
  // 不在 build 目录内，返回解析后的绝对路径
  return resolvedPath;
};

/**
 * 封装环境变量配置
 * @param mode 当前模式
 * @param prefix 需要过滤的前缀
 * @link 参考：https://cn.vite.dev/config/#using-environment-variables-in-config
 */
// @ts-ignore
export const wrapperEnv = (mode: string, prefix: string = ''): ViteEnv => {
  const env: any = loadEnv(mode, root, prefix);

  // 将变量转换指定类型
  for (const envName of Object.keys(env)) {
    let realName: string | boolean | number = env[envName].replace(/\\n/g, '\n');
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    env[envName] = realName;
    // @ts-ignore
    process.env[envName] = realName;
  }
  return env;
};

/* 打包分析 */
export const report = () => {
  const lifecycle = process.env.npm_lifecycle_event;
  return lifecycle === 'report'
    ? visualizer({ open: true, brotliSize: true, filename: 'report.html' })
    : (null as any);
};

/* 启用gzip压缩 */
export const compressPack = (mode: string) => {
  const { VITE_COMPRESSION } = wrapperEnv(mode);

  return VITE_COMPRESSION == 'gzip' ? viteCompression({ threshold: 1024000 }) : null;
};

/**
 * 计算打包后文件夹大小
 * @returns
 */
export const logOutputSize = (): string => {
  const outDir = `../${buildEnv().outDir}`;

  function convertSize(size: number) {
    const units: Array<string> = ['byte', 'KB', 'MB', 'GB'];

    // 输入的单位是否存在
    let index = 0;

    while (size >= 1024) {
      size /= 1024;
      index++;
    }

    return `${size.toFixed(2)} ${units[index]}`;
  }

  // 计算文件夹字节大小
  function getFolderSize(folderPath: string) {
    let size = 0;

    fs.readdirSync(folderPath).forEach((fileName: string) => {
      const filePath = path.join(folderPath, fileName);
      const stats = fs.statSync(filePath);

      if (stats.isFile()) {
        size += stats.size;
      } else if (stats.isDirectory()) {
        size += getFolderSize(filePath);
      }
    });

    return size;
  }

  const folderSize = getFolderSize(path.resolve(__dirname, outDir));

  return convertSize(folderSize);
};
