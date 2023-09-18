import Image from 'next/image';
import Router, { useRouter } from 'next/router';

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
    'Xin chào bạn, cảm ơn bạn đã ghé thăm CLB ITMC chúng mình! Chúng mình là CLB ITMC đến từ Học viện Công nghệ Bưu chính Viễn thông Cơ sở tại Thành phố Hồ Chí Minh. ITMC là một nơi dành cho những người có niềm yêu thích, đam mê công nghệ thông tin và đa phương tiện. Đó cũng chính là tên gọi của CLB chúng mình Information Technology and Multimedia Club. Chúng mình luôn luôn đón chào những ai có chung sở thích đến với CLB, làm quen, kết bạn, giúp đỡ và chia sẽ kiến thức cho nhau.',
  image: './club.svg',
};
const activityList: ItemWrapperProps = {
  title: 'Hoạt động và dự án',
  items: [
    {
      name: 'Workshop “Nặng không nặng"',
      pictureUrl: '/workshop1.png',
    },
    {
      name: 'ITMC’s Contest',
      pictureUrl: '/workshop2.png',
    },
    {
      name: "ITMC's Class",
      pictureUrl: '/workshop3.png',
    },
    {
      name: 'Workshop Vẽ tranh',
      pictureUrl: '/workshop4.png',
    },
    {
      name: 'Q&A cùng người trong nghề ',
      pictureUrl: '/workshop5.png',
    },
  ],
};

const awardList: ItemWrapperProps = {
  title: 'Giải thưởng và thành tựu',
  items: [
    {
      name: 'Giải khuyến khích cuộc thi UIT Hackathon 2022',
      pictureUrl: '/award1.png',
    },
    {
      name: 'Hai giải nhì cuộc thi OLP Tin học sinh viên khối không chuyên Tin năm 2022',
      pictureUrl: '/award2.jpg',
    },
    {
      name: 'Hai giải nhì cuộc thi OLP Tin học sinh viên khối không chuyên Tin năm 2022',
      pictureUrl: '/award3.jpg',
    },
    {
      name: 'Giải khuyến khích cuộc thi UIT Hackathon 2022',
      pictureUrl: '/award4.jpg',
    },
    {
      name: 'Một giải khuyến khích kì thi OLP Tin học sinh viên năm 2021',
      pictureUrl: '/award5.jpg',
    },
  ],
};

const departmentList: DepartmentProps = {
  title: 'Danh sách các ban của ITMC',
  list: [
    {
      title: 'Ban Lập trình',
      content:
        'Xin chào bạn, cảm ơn bạn đã ghé thăm CLB ITMC chúng mình! Chúng mình là CLB ITMC đến từ Học viện Công nghệ Bưu chính Viễn thông Cơ sở tại Thành phố Hồ Chí Minh. ITMC là một nơi dành cho những người có niềm yêu thích, đam mê công nghệ thông tin và đa phương tiện. Đó cũng chính là tên gọi của CLB chúng mình Information Technology and Multimedia Club. Chúng mình luôn luôn đón chào những ai có chung sở thích đến với CLB, làm quen, kết bạn, giúp đỡ và chia sẽ kiến thức cho nhau.',
      url: '',
      team: 'code',
    },
    {
      title: 'Ban Thiết kế',
      content:
        'Ban thiết kế là 1 bộ phận không thể thiếu của ITMC, đại diện cho cái Đa phương tiện - Multimedia, là nơi để các bạn thỏa sức sáng tạo qua nhiều hình thức và hoạt động khác nhau từ thiết kế đồ họa, vẽ tranh, làm sản phẩm handmade trong các buổi workshop mà CLB tổ chức và không thể không kể đến nhiếp ảnh khi CLB sẽ thường xuyên tổ chức các buổi "vi vu Sài Gòn" tạo điều kiện cho các bạn chụp ảnh. Song song với đó, các bạn sẽ được trau dồi kỹ năng liên quan ngành học và các kỹ năng mềm cần thiết khi làm việc nhóm nữa.',
      url: '',
      team: 'design',
    },
  ],
};

const headsOfClubList: HeadsClubProps = {
  title: 'Ban điều hành ITMC gồm những ai?',
  list: [
    {
      name: 'Trần Thu Mây',
      role: 'Chủ nhiệm CLB',
      avatar: './mol-may.svg',
      color: 'orange',
      message: 'Không xinh đẹp thì mình xingtu',
    },
    {
      name: 'Nguyễn Nhật Minh',
      role: 'Phó chủ nhiệm CLB',
      avatar: './haise.svg',
      color: 'blue',
      message:
        "It is not that I'm so smart. But I stay with the questions much longer.",
    },
    {
      name: 'Nguyễn Trần Thanh Hằng',
      role: 'Trưởng ban Thiết kế',
      avatar: './thanhhang.svg',
      color: 'orange',
      message: 'Kỷ luật sẽ đưa bạn đến nơi mà động lực không làm được',
    },
    {
      name: 'Đinh Tuấn Dương',
      role: 'Trưởng ban Lập trình',
      avatar: './tuanduong.svg',
      color: 'blue',
      message: 'Hãy là sự thay đổi mà bạn muốn thấy trên thế giới.',
    },
    {
      name: 'Thái Yến Linh',
      role: 'Phó ban Thiết kế',
      avatar: './linhthai.svg',
      color: 'orange',
      message: 'Sự cẩu thả trong bất cứ nghề gì cũng là một sự bất lương',
    },
    {
      name: 'Trần Vũ Phương Nam',
      role: 'Phó ban Lập trình',
      avatar: './fungoman.svg',
      color: 'blue',
      message:
        "I don't always test my code, but when I do, I do it in production.",
    },
  ],
};

const faqList = [
  {
    question:
      'Ngoài các hoạt động học thuật ra thì ITMC còn các hoạt động nào khác không?.',
    answer:
      'The random sentence generator provides this fundamental element with just one click. The generated random sentences brainstorm you and will help you come up with new ideas, stories, poetry, lyrics, and so on. This virtual utility tool chooses nouns, pronouns, adjectives, verbs, and other parts of speech with precision and subtlety that inclines clarity and sophistication.',
  },
  {
    question:
      'Có phải chỉ những bạn có kiến thức chuyên ngành mới được tham gia ITMC thôi đúng không?',
    answer: 'lorem impostor',
  },
];

export default function App() {
  const router = useRouter();
  return (
    <>
      <Header path={router.pathname} />
      <div className={styles.container}>
        <AboutUs {...aboutUs} />
        <Department {...departmentList} />
        <HeadsClub {...headsOfClubList} />
        <ItemWrapper
          className='bg-[#FDFFF6] mt-[0.75rem] auto-margin-top'
          title='Hoạt động và dự án'
          items={activityList.items}
          is_shown={false}
        />
        <ItemWrapper
          className='bg-[#FFF8F4] mt-[0.75rem] auto-margin-tophea'
          title='Giải thưởng và thành tựu'
          items={awardList.items}
          is_shown={false}
        />
        <Faq
          className='mt-[0.75rem] auto-margin-top'
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
        <Form className='mt-[0.75rem] auto-margin-top' />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
