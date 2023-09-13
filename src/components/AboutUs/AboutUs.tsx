import Image from 'next/image';
import classNames from 'classnames';

import styles from './AboutUs.module.scss';

export type AboutUsProps = {
  readonly title: string;
  readonly content: string;
  readonly image: string;
};

export function AboutUs(props: AboutUsProps) {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.wrapper, styles.left_col)}>
        <div className={classNames(styles.title)}>{props.title}</div>
        <div className={styles.text}>{props.content}</div>
      </div>
      <div className={styles.wrapper}>
        <Image
          fill
          src={props.image}
          objectFit='cover'
          alt='ITMC'
          style={{ borderRadius: '77px' }}
        />
      </div>
    </div>
  );
}
