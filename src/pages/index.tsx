import Image from 'next/image';

import { AboutUs, type AboutUsProps } from '@/components/AboutUs/AboutUs';
import {
  Department,
  type DepartmentProps,
} from '@/components/Department/Department';
import { Faq } from '@/components/Faq';
import { Form } from '@/components/Form';
import Header from '@/components/Header/Header';
import {
  HeadsClub,
  type HeadsClubProps,
} from '@/components/HeadsClub/HeadsClub';
import { ItemWrapper, type ItemWrapperProps } from '@/components/Item';

import styles from '../styles/Homepage.module.scss';

const aboutUs: AboutUsProps = {
  title: 'Về ITMC',
  content:
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
  image: './club.svg',
};
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

const departmentList: DepartmentProps = {
  title: 'Danh sách các ban của ITMC',
  list: [
    {
      title: 'Ban Lập trình',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
      url: '#',
      team: 'code',
    },
    {
      title: 'Ban Thiết kế',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
      url: '#',
      team: 'design',
    },
  ],
};

const headsOfClubList: HeadsClubProps = {
  title: 'Ban Điều hành ITMC gồm những ai?',
  list: [
    {
      name: 'Trần Thu Mây',
      role: 'Chủ nhiệm CLB',
      avatar: './mol-may.svg',
    },
    {
      name: 'Nguyễn Nhật Minh',
      role: 'Phó chủ nhiệm CLB',
      avatar: './haise.svg',
    },
    {
      name: 'Nguyễn Trần Thanh Hằng',
      role: 'Trưởng ban Thiết kế',
      avatar: './thanhhang.svg',
    },
    {
      name: 'Đinh Tuấn Dương',
      role: 'Trưởng ban Lập trình',
      avatar: './tuanduong.svg',
    },
    {
      name: 'Thái Yến Linh',
      role: 'Phó ban Thiết kế',
      avatar: './linhthai.svg',
    },
    {
      name: 'Trần Vũ Phương Nam',
      role: 'Phó ban Lập trình',
      avatar: './fungoman.svg',
    },
  ],
};

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AboutUs {...aboutUs} />
        <Department {...departmentList} />
        <HeadsClub {...headsOfClubList} />
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
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
