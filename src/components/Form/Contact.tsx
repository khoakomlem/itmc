import { cn } from '@/utils';

type ContactProps = {
  readonly className?: string;
  readonly icon: JSX.Element;
  readonly content: string;
};

export function Contact(props: ContactProps): JSX.Element {
  return (
    <div
      className={cn(
        'flex items-center gap-x-4 rounded-[38px] bg-white text-black p-3',
        props.className
      )}
    >
      {props.icon}
      <p className='text-[20px]'>{props.content}</p>
    </div>
  );
}
