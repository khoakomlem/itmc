import React from 'react';
import { Transition } from '@headlessui/react';
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
        'rounded-[39px] bg-[#F0F0F0] shrink py-8 px-11 flex flex-col duration-200 shadow-lg',
        props.className
      )}
    >
      <div
        className='flex flex-row cursor-pointer'
        onClick={() => {
          setIsExpand(!isExpand);
        }}
      >
        <div className='flex flex-1'>
          <p className='font-[Inter] text-[#1A6E9D] lg:text-2xl text-xl font-bold'>
            {props.question}
          </p>
        </div>
        <div className='flex'>
          {isExpand ? (
            <MinusIcon className='w-[40px] cursor-pointer' />
          ) : (
            <PlusIcon className='w-[40px] cursor-pointer' />
          )}
        </div>
      </div>
      <div>
        <Transition
          show={isExpand}
          enter='transition-opacity duration-400'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-400'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <p className='mt-4 font-[Inter] text-[#000] lg:text-2xl text-1xl font-[50rem]'>
            {props.answer}
          </p>
        </Transition>
      </div>
    </div>
  );
}
