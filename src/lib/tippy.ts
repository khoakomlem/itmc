import 'tippy.js/animations/shift-toward-subtle.css';

import tippy, { type CreateSingletonProps } from 'tippy.js';

export const defaultOptions = {
  animation: 'shift-toward-subtle',
  theme: 'tooltip-theme',
  arrow: true,
};

const createTippy = (
  el: HTMLElement,
  options: Partial<CreateSingletonProps> = {}
) => {
  const instance = tippy(el, {
    ...defaultOptions,
    ...options,
  });

  return instance;
};

export default createTippy;
