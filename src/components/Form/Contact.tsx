import Link from 'next/link';

import { cn } from '@/utils';

type ContactProps = {
  readonly className?: string;
  readonly icon: JSX.Element;
  readonly content: string;
  readonly url: string;
};

export function Contact(props: ContactProps): JSX.Element {
  return (
    <div
      className={cn(
        'flex items-center gap-x-4 rounded-[38px] bg-white text-black p-3 max-w-[200px]',
        props.className
      )}
    >
      {props.icon}
      <a
        target='_blank'
        href={props.content === 'Email' ? `"mailto:${props.url}` : props.url}
        rel='noreferrer'
      >
        <p className='text-[20px]'>{props.content}</p>
      </a>
    </div>
  );
}
