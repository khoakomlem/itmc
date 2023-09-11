import React from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';

import { cn } from '@/utils';

type FaqCardProps = {
  readonly question: string;
  readonly answer: string;
  readonly className?: string;
};

export function FaqCard(props: FaqCardProps) {
  const [isExpand, setIsExpand] = React.useState(false);
  return (
    <div
      className={cn(
        'rounded-[39px] bg-[#F0F0F0] shrink py-8 px-11 flex flex-row',
        props.className
      )}
    >
      <div className='flex flex-col flex-1'>
        <p className='font-[Inter] text-[#1A6E9D] text-2xl font-bold'>
          {props.question}
        </p>
        {isExpand && (
          <p className='mt-4 font-[Inter] text-[#000] text-[20px] font-[500px]'>
            {props.answer}
          </p>
        )}
      </div>
      <div
        className='flex'
        onClick={() => {
          setIsExpand(!isExpand);
        }}
      >
        {isExpand ? (
          <MinusIcon className='w-[40px] cursor-pointer' />
        ) : (
          <PlusIcon className='w-[40px] cursor-pointer' />
        )}
      </div>
    </div>
  );
}
