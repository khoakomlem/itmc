// Import '@fontsource/inter';

import React, { useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import { cn } from '@/utils';

import { ItemCard, type ItemCardProps } from './ItemCard';

export type ItemWrapperProps = {
  readonly title: string;
  readonly items: ItemCardProps[];
  readonly className?: string;
  readonly is_shown?: boolean;
};

export function ItemWrapper(props: ItemWrapperProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = React.useState(false);
  const [scrollRight, setScrollRight] = React.useState(true);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = 50;
    }
  }, []);

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    if (element.scrollLeft <= 100) {
      setScrollLeft(false);
    } else {
      setScrollLeft(true);
    }

    if (element.scrollWidth - element.scrollLeft - element.clientWidth < 100) {
      setScrollRight(false);
    } else {
      setScrollRight(true);
    }
  };

  const scrollRightHandler = () => {
    const element = ref.current;
    if (element) {
      element.scrollLeft += 320;
    }
  };

  const scrollLeftHandler = () => {
    const element = ref.current;
    if (element) {
      element.scrollLeft -= 320;
    }
  };

  return (
    <div
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-9 rounded-[30px] my-20 sm:my-10 py-8 sm:py-3 shadow-sm',
        props.className
      )}
    >
      <div className='flex flex-row-reverse pl-4'>
        <div className='relative w-auto flex items-center'>
          {props.is_shown ? (
            <input
              type='button'
              className='rounded-[3rem] bg-[#D9D9D9] py-1 px-5 lg:text-2xl text-1xl font-[Inter] cursor-pointer'
              value='Chi tiết'
            />
          ) : (
            ''
          )}
        </div>
        <span className='gradient-text font-[Inter] title py-2 font-extrabold text-left w-[100%] mr-1'>
          {props.title}
        </span>
      </div>
      <div
        ref={ref}
        className='container relative overflow-x-scroll flex flex-row py-8 sm:py-3 hidescrollbar scroll-smooth select-none'
        onScroll={onScroll}
      >
        {scrollLeft ? (
          <button
            type='button'
            className='sticky h-[100%] my-auto left-0 z-10 active:scale-90 duration-150 hidden sm:block'
            onClick={scrollLeftHandler}
          >
            <ChevronLeftIcon className='h-12 w-12 bg-[#616161] rounded-full' />
          </button>
        ) : (
          <div className='sticky h-[100%] my-auto hidden sm:block'>
            <div className='right-0 h-12 w-12 rounded-full' />
          </div>
        )}
        {props.items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ItemCard key={`member${index}`} {...item} />
        ))}
        {scrollRight ? (
          <button
            type='button'
            className='sticky h-[100%] my-auto right-0 active:scale-90 duration-150 hidden sm:block'
            onClick={scrollRightHandler}
          >
            <ChevronRightIcon className='h-12 w-12 bg-[#616161] rounded-full' />
          </button>
        ) : (
          <div className='sticky h-[100%] my-auto hidden sm:block'>
            <div className='right-0 h-12 w-12 rounded-full' />
          </div>
        )}
      </div>
    </div>
  );
}
