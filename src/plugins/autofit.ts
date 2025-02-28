import autofit from 'autofit.js';

/** 使用autoFit 做大屏*/
export const autoFit = () => {
  const hasAutoFit = import.meta.env.VITE_POST_CSS_PX_TO_VIEWPORT8_PLUGIN;

  if (hasAutoFit !== 'autofit') return null;

  autofit.init({
    dh: 1080,
    dw: 1920,
    el: 'body',
    resize: true,
    transition: 0.49,
    limit: 0.1,
    allowScroll: false,
  });
};
