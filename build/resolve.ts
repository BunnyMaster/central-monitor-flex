import { pathResolve } from './utils';

export const resolve = () => {
  return {
    alias: {
      '@': pathResolve('../src'),
      '@build': pathResolve(),
    },
  };
};
