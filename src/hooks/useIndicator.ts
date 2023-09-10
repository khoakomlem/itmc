import React from 'react';

export function useIndicator() {
  const [isOpenDropdown, setIsOpenDropdown] = React.useState(false);
  const [isShowIndicator, setIsShowIndicator] = React.useState(false);
  const indicateRef = React.useRef<HTMLDivElement>(null);
  const indicateWrapperRef = React.useRef<HTMLDivElement>(null);

  const showIndicator = () => {
    setIsShowIndicator(true);
  };

  const hideIndicator = () => {
    setIsShowIndicator(false);
  };

  const indicatorWrapper = indicateWrapperRef.current;
  React.useEffect(() => {
    setTimeout(() => {
      const indicators: Element[] = Array.from(
        document.querySelectorAll('.indicator')
      );
      const { top: tWraper } =
        indicateWrapperRef.current!.getBoundingClientRect();

      indicatorWrapper?.addEventListener('mouseenter', showIndicator);
      indicatorWrapper?.addEventListener('mouseleave', hideIndicator);

      for (const indicator of indicators) {
        indicator.addEventListener('mouseenter', (event) => {
          if (event.target instanceof Element) {
            const { width, height, top, left } =
              event.target.getBoundingClientRect();
            if (indicateRef.current) {
              indicateRef.current.style.width = `${width}px`;

              indicateRef.current.style.height = `${height}px`;

              indicateRef.current.style.top = `${top - tWraper}px`;

              indicateRef.current.style.left = '8px';
            }
          }
        });
      }
    }, 1);
    return () => {
      if (!isOpenDropdown) {
        indicatorWrapper?.removeEventListener('mouseenter', showIndicator);
        indicatorWrapper?.removeEventListener('mouseleave', hideIndicator);
      }
    };
  }, [indicatorWrapper, isOpenDropdown]);

  return { indicateRef, indicateWrapperRef, isShowIndicator };
}
