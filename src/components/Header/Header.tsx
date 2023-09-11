import Image from 'next/image';
import classNames from 'classnames';
import { isArray } from 'lodash';

import styles from './Header.module.scss';

function Header() {
  const navList: Array<{ label: string; value: string }> = [
    { label: 'Home', value: '#' },
    { label: 'About us', value: '#' },
    { label: 'Blog', value: '#' },
    { label: 'Activities', value: '#' },
  ];

  const socialAccounts: Array<{ icon: string; url: string }> = [
    { icon: './facebook.svg', url: '#' },
    { icon: './google.svg', url: '#' },
    { icon: './youtube.svg', url: '#' },
  ];

  return (
    <div className={styles.wrapper}>
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
            <Image
              key={item.icon}
              src={item.icon}
              width={20}
              height={20}
              alt='social-network'
            />
          ))}
      </div>
    </div>
  );
}

export default Header;
