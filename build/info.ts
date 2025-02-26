import boxen, { type Options as BoxenOptions } from 'boxen';
import dayjs, { type Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import gradientString from 'gradient-string';

import { wrapperEnv } from './utils';

dayjs.extend(duration);

const boxenOptions: BoxenOptions = {
  padding: 0.94,
  borderColor: 'cyan',
  borderStyle: 'round',
  textAlignment: 'left',
};

/* 输出日志信息 */
const printLogMessage = (VITE_PORT: number) => {
  return gradientString('cyan', 'magenta').multiline(
    `保存成功！服务器重新启动...
项目访问地址如下：
http://localhost:${VITE_PORT}`
  );
};

export const viteConsoleLog = (mode) => {
  const { VITE_PORT } = wrapperEnv(mode);

  let config: { command: string };
  let startTime: Dayjs;
  let endTime: Dayjs;
  return {
    name: 'vite:buildInfo',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    buildStart() {
      console.log(boxen(printLogMessage(VITE_PORT), boxenOptions));
      if (config.command === 'build') {
        startTime = dayjs(new Date());
      }
    },
    closeBundle() {
      if (config.command === 'build') {
        endTime = dayjs(new Date());
        const format = dayjs.duration(endTime.diff(startTime)).format('mm分ss秒');
        console.log(
          boxen(
            gradientString('cyan', 'magenta').multiline(`🎉 恭喜打包完成（总用时${format}）`),
            boxenOptions
          )
        );
      }
    },
  };
};
