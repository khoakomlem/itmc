import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';

export type ItemCardProps = {
  readonly name: string;
  readonly pictureUrl: string;
  readonly description?: string;
  readonly href?: string;
};

export function ItemCard(props: ItemCardProps): JSX.Element {
  return (
    <div className='cursor-pointer divide-gray-200 rounded-lg bg-white text-center shadow-lg h-[22rem] mx-4 min-w-[273px]'>
      <a href={props?.href} target='_blank' rel='noreferrer'>
        <div className='relative flex flex-1 flex-col items-center h-[65%] bg-[#1C74A6] card-slide-item cursor-pointer'>
          <Image
            fill
            alt='activity'
            src={props.pictureUrl}
            className='w-[100%] h-[100%] object-cover'
          />
        </div>
        <div>
          <div className='-mt-px flex divide-x divide-gray-200'>
            <div className='flex w-0 flex-1'>
              <p className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-lg font-semibold text-gray-900 px-3'>
                {props.name}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
