import { cn } from '@/utils';

import { FaqCard } from './FaqCard';

type FaqProps = {
  readonly items: Array<{
    readonly question: string;
    readonly answer: string;
  }>;
  readonly className?: string;
};

export function Faq(props: FaqProps): JSX.Element {
  const a = 1;
  return (
    <div
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 rounded-[30px] py-8 bg-[#FFF] shadow-sm',
        props.className
      )}
    >
      <div className='flex flex-col'>
        <h1 className='gradient-text py-8 font-[Inter] text-5xl font-extrabold'>
          Câu hỏi thường gặp
        </h1>
        <div>
          {props.items.map((item, index) => (
            <FaqCard
              // eslint-disable-next-line react/no-array-index-key
              key={`faq${index}`}
              className='mb-8'
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
