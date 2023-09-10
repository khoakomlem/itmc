import React from 'react';
import * as Tippy from 'tippy.js';

import { defaultOptions } from '@/lib/tippy';

export const useGroupTippy = (
  options: Partial<Tippy.CreateSingletonProps> = {}
) => {
  const [tippyInstances, setTippyInstances] = React.useState<Tippy.Instance[]>(
    []
  );
  const singleton = React.useRef<Tippy.CreateSingletonInstance>();

  const addTippy = (tippyInstance: Tippy.Instance) => {
    tippyInstances.push(tippyInstance);
    setTippyInstances([...tippyInstances]);
  };

  React.useEffect(() => {
    if (tippyInstances && tippyInstances.length > 0) {
      const localSingleton = Tippy.createSingleton(tippyInstances, {
        ...defaultOptions,
        ...options,
        theme: 'tooltip-theme',
        placement: 'right',
        moveTransition: 'transform 0.2s ease-out',
        overrides: ['placement', 'theme'],
      });

      singleton.current = localSingleton;
      return () => {
        localSingleton.destroy();
      };
    }
  }, [options, tippyInstances]);

  return { addTippy };
};
