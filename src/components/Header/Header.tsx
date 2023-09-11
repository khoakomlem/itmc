import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { isArray } from 'lodash';

import Icon from '../Icon/Icon';
import Modal from '../Modal/Modal';
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

  const handleCloseMenuModal = () => {
    setShowMenuModal(false);
  };

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
        <div className={styles.right_col}>
          <Icon
            icon='ham---menu'
            size={30}
            onClick={() => {
              setShowMenuModal(true);
            }}
          />
        </div>
        <Modal
          mobileFullHeight
          backdrop
          headerClassName='py-[8px] flex items-center'
          width='60%'
          title={<Image width={99} height={52} src='./logo.svg' alt='logo' />}
          mobilePosition='right'
          className={styles.mobile_header_modal}
          visible={showMenuModal}
          onClose={handleCloseMenuModal}
        >
          <div className={styles.nav_list_wrapper}>
            <div className={styles.nav_list}>
              {isArray(navList) &&
                navList.map((item: any) => (
                  <div key={item.label} className={styles.item}>
                    {item.label}
                  </div>
                ))}
            </div>
          </div>
        </Modal>
      </div>
      <div className={styles.intro}>
        <div className={styles.intro_title}>We are ITMC</div>
        <div className={styles.intro_description}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est.
        </div>
      </div>
    </div>
  );
}

export default Header;
