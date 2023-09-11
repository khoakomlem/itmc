import { Faq } from '@/components/Faq';
import { Form } from '@/components/Form';
import { HelloWorld } from '@/components/HelloWorld';
import { ItemWrapper, type ItemWrapperProps } from '@/components/Item';

const fake: ItemWrapperProps = {
  title: 'Hello World',
  items: [
    {
      name: 'Giai thuong A',
      description: 'Cuoc thi A',
      pictureUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Giai thuong A',
      description: 'Cuoc thi A',
      pictureUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Giai thuong A',
      description: 'Cuoc thi A',
      pictureUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Giai thuong A',
      description: 'Cuoc thi A',
      pictureUrl: 'https://picsum.photos/200',
    },
    {
      name: 'Giai thuong A',
      description: 'Cuoc thi A',
      pictureUrl: 'https://picsum.photos/200',
    },
  ],
};

export default function App() {
  return (
    <>
      <ItemWrapper
        className='bg-[#FDFFF6] mt-28'
        title='Hoạt động và dự án'
        items={fake.items}
      />
      <ItemWrapper
        className='bg-[#FFF8F4] mt-28'
        title='Giải thưởng và thành tựu'
        items={fake.items}
      />
      <Faq
        className='mt-28'
        items={[
          {
            question:
              'A sentence is the fundamental element to express oneself in their own way.',
            answer:
              'The random sentence generator provides this fundamental element with just one click. The generated random sentences brainstorm you and will help you come up with new ideas, stories, poetry, lyrics, and so on. This virtual utility tool chooses nouns, pronouns, adjectives, verbs, and other parts of speech with precision and subtlety that inclines clarity and sophistication.',
          },
          {
            question:
              'A sentence is the fundamental element to express oneself in their own way.',
            answer: 'lorem impostor',
          },
        ]}
      />
      <Form className='mt-28' />
    </>
  );
}
