// Import '@fontsource/inter';

import { cn } from '@/utils';

import { ItemCard, type ItemCardProps } from './ItemCard';

export type ItemWrapperProps = {
  readonly title: string;
  readonly items: ItemCardProps[];
  readonly className?: string;
};

export function ItemWrapper(props: ItemWrapperProps) {
  return (
    <div
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 rounded-[30px] mt-3 py-8 shadow-sm',
        props.className
      )}
    >
      <div className='flex pl-12'>
        <span className='gradient-text font-[Inter] text-[2rem] md:text-[3rem] lg:text-[4rem] font-extrabold w-[80%]'>
          {props.title}
        </span>
        <div className='flex items-center relative w-[20%]'>
          <input
            type='button'
            className='rounded-[3rem] bg-[#D9D9D9] py-2 px-5 text-[1rem] md:text-[2rem] lg:text-[3rem] font-[Inter] absolute right-1'
            value='Chi tiết'
          />
        </div>
      </div>
      <div className='container overflow-y-scroll flex flex-row p-8'>
        {props.items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ItemCard key={`member${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
