import Image from 'next/image';

import styles from './HeadsClubCard.module.scss';

export type HeadsClubCardProps = {
  readonly name: string;
  readonly role: string;
  readonly avatar: string;
};

export function HeadsClubCard(props: HeadsClubCardProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Image fill src={props.avatar} alt='avatar' />
      </div>
      <div className='text-base font-bold text-[rgba(0, 0, 0, 1)]'>
        {props.name}
      </div>
      <div className='text-base font-semibold text-[rgba(0,0,0,1)]'>
        {props.role}
      </div>
    </div>
  );
}
