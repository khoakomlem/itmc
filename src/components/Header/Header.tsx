import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { isArray } from 'lodash';

import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';
import styles from './Header.module.scss';

export type HeaderProps = {
  readonly path: string;
};
function Header(props: HeaderProps) {
  const router = useRouter();
  const navList: Array<{ label: string; value: string }> = [
    { label: 'Home', value: '' },
    { label: 'About us', value: '' },
    { label: 'Blog', value: '' },
    { label: 'Event', value: '' },
  ];

  const socialAccounts: Array<{ icon: string; url: string }> = [
    { icon: './facebook-white.svg', url: '' },
    { icon: './google.svg', url: '' },
    { icon: './youtube.svg', url: '' },
  ];

  const iconMobileList: Array<{
    activeIcon: string;
    unactiveIcon: string;
    path: string;
    url: string;
  }> = [
    { activeIcon: 'home-active', unactiveIcon: 'home', path: '/', url: '' },
    {
      activeIcon: 'event-active',
      unactiveIcon: 'event',
      path: '/event',
      url: '',
    },
    {
      activeIcon: 'about-us-active',
      unactiveIcon: 'about-us',
      path: '/about-us',
      url: '',
    },
    {
      activeIcon: 'blogs-active',
      unactiveIcon: 'blogs',
      path: '/blogs',
      url: '',
    },
  ];

  const handleNavigation = async (path: string) => {
    await router.push(path);
  };

  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollUp = currentScrollY < prevScrollY;

      if (scrollUp && isHidden) {
        setIsHidden(false);
      } else if (!scrollUp && !isHidden) {
        setIsHidden(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY, isHidden]);

  // Const MobileIcon = (path: string) => {
  //   return <Icon
  // }

  const [showMenuModal, setShowMenuModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.desktop_header}>
        <div className={styles.logo}>
          <Image width={99} height={52} src='./logo.svg' alt='logo' />
        </div>
        <div className={styles.nav}>
          {isArray(navList) &&
            navList.map((item: any) => (
              <div key={item.label} className={styles.item}>
                {item.label}
              </div>
            ))}
        </div>
        <div className={styles.social_links}>
          {isArray(socialAccounts) &&
            socialAccounts.map((item: any) => (
              <div key={item.icon} className={styles.item}>
                <Image fill src={item.icon} alt='social-network' />
              </div>
            ))}
        </div>
      </div>

      <div className={styles.mobile_header}>
        <div className={styles.logo}>
          <Image width={99} height={52} src='./logo.svg' alt='logo' />
        </div>
        <div
          className={classNames(styles.bottom_menu, {
            [styles.hidden]: isHidden,
          })}
        >
          {isArray(iconMobileList) &&
            iconMobileList.map((item, index) => (
              <Link key={index++} href={item.url}>
                <Icon
                  style={{ cursor: 'pointer' }}
                  width={35}
                  height={35}
                  icon={
                    props.path === item.path
                      ? item.activeIcon
                      : item.unactiveIcon
                  }
                />
              </Link>
            ))}
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.intro_title}>We are ITMC</div>
        <div className={styles.intro_description}>
          Xin chào bạn, cảm ơn bạn đã ghé thăm CLB ITMC chúng mình! Chúng mình
          là CLB ITMC đến từ Học viện Công nghệ Bưu chính Viễn thông Cơ sở tại
          Thành phố Hồ Chí Minh. ITMC là một nơi dành cho những người có niềm
          yêu thích, đam mê công nghệ thông tin và đa phương tiện. Đó cũng chính
          là tên gọi của CLB chúng mình Information Technology and Multimedia
          Club. Chúng mình luôn luôn đón chào những ai có chung sở thích đến với
          CLB, làm quen, kết bạn, giúp đỡ và chia sẽ kiến thức cho nhau.
        </div>
      </div>
    </div>
  );
}

export default Header;
