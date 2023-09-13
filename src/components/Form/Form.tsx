import { cn } from '@/utils';

import { Contact } from './Contact';
import { MailForm } from './MailForm';

export type FormProps = {
  readonly className?: string;
};

export function Form(props: FormProps): JSX.Element {
  const a = 1;
  return (
    <div
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#FFF] shadow-sm form-background rounded-[38px] grid grid-cols-1 lg:grid-cols-2 gap-4',
        props.className
      )}
    >
      <div className='text-[white] mb-8'>
        <img src='/ITMC.svg' alt='ITMC' className='w-[200px] h-[200px] ' />
        <p>Học viện Công nghệ Bưu chính Viễn Thông</p>
        <p>97 Man Thiện, Phường Hiệp Phú, Quận 9, TP. Hồ Chí Minh</p>
        <Contact
          className='mt-4'
          icon={<img src='/facebook.svg' className='w-7 h-7' />}
          content='(+84) 28 7300 2222'
        />
        <Contact
          className='mt-3'
          icon={<img src='/tiktok.svg' className='w-7 h-7' />}
          content='(+84) 28 7300 2222'
        />
        <Contact
          className='mt-3'
          icon={<img src='/email.svg' className='w-7 h-7' />}
          content='(+84) 28 7300 2222'
        />
      </div>
      <div>
        <MailForm />
      </div>
    </div>
  );
}
