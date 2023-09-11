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
      <h1 className='gradient-text py-8 font-[Inter] text-5xl font-extrabold'>
        {props.title}
      </h1>
      <div className='container overflow-y-scroll flex flex-row p-8'>
        {props.items.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ItemCard key={`member${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}
