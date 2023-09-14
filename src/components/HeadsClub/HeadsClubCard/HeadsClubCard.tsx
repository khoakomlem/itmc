import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './HeadsClubCard.module.scss';

export type HeadsClubCardProps = {
  readonly name: string;
  readonly role: string;
  readonly avatar: string;
  readonly message: string;
  readonly color?: 'blue' | 'orange';
};

export function HeadsClubCard({
  color = 'blue',
  ...props
}: HeadsClubCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.avatar}>
        <Image fill src={props.avatar} alt='avatar' />
      </div>
      <div className='text-base font-bold text-[rgba(0, 0, 0, 1)]'>
        {props.name}
      </div>
      <div className='text-base font-medium text-[rgba(0,0,0,1)]'>
        {props.role}
      </div>
      <div
        className={classNames(styles.pop_up_message, {
          [styles.blue]: color === 'blue',
          [styles.orange]: color === 'orange',
          [styles.show]: isHovered,
        })}
      >
        <div className={styles.message}>{props.message}</div>
      </div>
    </div>
  );
}
