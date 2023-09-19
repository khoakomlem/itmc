import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header/Header';

import styles from '../styles/404.module.scss';

const NotFound = () => (
  <div className={styles.container}>
    <div className={styles.img_wrapper}>
      <Image src='./404.svg' layout='fill' alt='404' />
    </div>
    <h1 className=' font-[48px] text-[#fff]'>Oops :( </h1>
    <p className='  font-[32px]  text-[#fff] text-center'>
      Trang web này hiện đang được ITMC phát triển những tính năng cực kì thú
      vị. Bạn hãy quay trở lại sau nhé.
    </p>
    <div className={styles.button}>
      <Link href='https://itmc.vercel.app/'>Trở về trang chủ</Link>
    </div>
  </div>
);

export default NotFound;
