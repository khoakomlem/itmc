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
    'Xin chào bạn, cảm ơn bạn đã ghé thăm ITMC chúng mình! Chúng mình là ITMC đến từ Học viện Công nghệ Bưu chính Viễn thông Cơ sở tại Thành phố Hồ Chí Minh. ITMC là một nơi dành cho những người có niềm yêu thích, đam mê công nghệ thông tin và đa phương tiện. Đó cũng chính là tên gọi của CLB chúng mình Information Technology and Multimedia Club. Chúng mình luôn luôn đón chào những ai có chung sở thích đến với CLB, làm quen, kết bạn, giúp đỡ và chia sẽ kiến thức cho nhau.',
  image: '/club.png',
};
const activityList: ItemWrapperProps = {
  title: 'Hoạt động và dự án',
  items: [
    {
      name: 'Workshop “Nặng không nặng"',
      pictureUrl: '/workshop1.png',
      href: '/event',
    },
    {
      name: 'ITMC’s Contest',
      pictureUrl: '/workshop2.png',
      href: '/event',
    },
    {
      name: "ITMC's Class",
      pictureUrl: '/workshop3.png',
      href: '/event',
    },
    {
      name: 'Workshop Vẽ tranh',
      pictureUrl: '/workshop4.png',
      href: '/event',
    },
    {
      name: 'Q&A cùng người trong nghề ',
      pictureUrl: '/workshop5.png',
      href: '/event',
    },
  ],
};

const awardList: ItemWrapperProps = {
  title: 'Giải thưởng và thành tựu',
  items: [
    {
      name: 'Giải khuyến khích cuộc thi UIT Hackathon 2022',
      pictureUrl: '/award1.png',
      href: '/award',
    },
    {
      name: 'Hai giải nhì cuộc thi OLP Tin học sinh viên khối không chuyên Tin năm 2022',
      pictureUrl: '/award2.jpg',
      href: '/award',
    },
    {
      name: 'Hai giải nhì cuộc thi OLP Tin học sinh viên khối không chuyên Tin năm 2022',
      pictureUrl: '/award3.jpg',
      href: '/award',
    },
    {
      name: 'Giải khuyến khích cuộc thi UIT Hackathon 2022',
      pictureUrl: '/award4.jpg',
      href: '/award',
    },
    {
      name: 'Một giải khuyến khích kì thi OLP Tin học sinh viên năm 2021',
      pictureUrl: '/award5.jpg',
      href: '/award',
    },
  ],
};

const departmentList: DepartmentProps = {
  title: 'Danh sách các ban của ITMC',
  list: [
    {
      title: 'Ban Lập trình',
      content:
        'Xin chào bạn, cảm ơn bạn đã ghé thăm ITMC chúng mình! Chúng mình là ITMC đến từ Học viện Công nghệ Bưu chính Viễn thông Cơ sở tại Thành phố Hồ Chí Minh. ITMC là một nơi dành cho những người có niềm yêu thích, đam mê công nghệ thông tin và đa phương tiện. Đó cũng chính là tên gọi của CLB chúng mình Information Technology and Multimedia Club. Chúng mình luôn luôn đón chào những ai có chung sở thích đến với CLB, làm quen, kết bạn, giúp đỡ và chia sẽ kiến thức cho nhau.',
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
                'Câu lạc bộ ITMC chỉ có các hoạt động liên quan đến học thuật đúng không?',
              answer:
                'CLB ITMC là một CLB học thuật, là nơi trao đổi và chia sẻ kiến thức giữa các bạn sinh viên. Bên cạnh những hoạt động học chính thì CLB sẽ luôn có những buổi đi chơi, hoạt động tập thể để giải trí và tạo sự gắn kết cho các thành viên trong CLB.',
            },
            {
              question:
                'Câu lạc bộ ITMC chỉ tuyển những thành viên mới có kiến thức sẵn về lập trình và thiết kế đúng không?',
              answer:
                'CLB ITMC luôn chào đón những bạn sinh viên có niềm đam mê với công nghệ thông tin và đa phương tiện, kể cả bạn là người mới hay là người có kiến thức, kinh nghiệm thì CLB sẽ luôn có những hoạt động cho bạn, tạo cơ hội cho bạn để học hỏi và phát triển thêm! Mỗi người có một xuất phát điểm khác nhau, bạn đừng ngại nhé!',
            },
            {
              question:
                'Câu lạc bộ ITMC chỉ dạy những kiến thức trên trường thôi phải không?',
              answer:
                'CLB ITMC là một CLB để các bạn sinh viên chia sẻ kiến thức trong và ngoài ngành với nhau. Phương pháp học chủ yếu là tự học và gặp mặt để tự học cùng nhau ở các buổi gặp mặt định kì của CLB. Kiến thức sẽ từ cơ bản đến nâng cao, mang tính thực tế tạo cơ hội để bạn có thể ứng dụng khi đi đi làm.',
            },
            {
              question:
                'Có phải Ban lập trình của CLB ITMC chỉ dành cho những bạn thi học sinh giỏi và những bạn chuyên tin thôi đúng không?',
              answer:
                'Ban lập trình không yêu cầu các bạn sinh viên phải là những bạn từng đi thi học sinh giỏi hay là học sinh chuyên tin. Chỉ cần các bạn có niềm yêu thích và đam mê về công nghệ thông tin, ITMC luôn luôn chào đón các bạn đến với CLB.',
            },
            {
              question:
                'Liệu Ban thiết kế của CLB ITMC chỉ dành cho những bạn đã biết vẽ, biết dùng AI và Photoshop?',
              answer:
                'CLB ITMC không yêu cầu các bạn phải biết sử dụng AI và Photoshop, CLB sẽ có lớp học để training và chia sẻ cho bạn những kiến thức cơ bản về cách sử dụng các ứng dụng này. Các bạn cần có niềm đam mê và yêu thích đa phương tiện cùng với một tư duy mĩ thuật và phong cách cá nhân đặc trưng của riêng bạn để có thể tham gia vào CLB!',
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
