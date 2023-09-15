import classNames from 'classnames';
import { isArray } from 'lodash';

import { cn } from '@/utils';

import styles from './HeadsClub.module.scss';
import {
  HeadsClubCard,
  type HeadsClubCardProps,
} from './HeadsClubCard/HeadsClubCard';

export type HeadsClubProps = {
  readonly title: string;
  readonly list: HeadsClubCardProps[];
  readonly className?: string;
};

export function HeadsClub(props: HeadsClubProps) {
  return (
    <div
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 rounded-[30px] mt-3 py-8 sm:py-3 shadow-sm overflow:auto',
        props.className
      )}
    >
      <h1
        className={classNames(
          'gradient-text py-8 sm:py-3 font-[Inter] title font-extrabold w-auto  leading-[30px]',
          styles.title
        )}
      >
        {props.title}
      </h1>
      <div className={styles.wrapper}>
        {isArray(props.list) &&
          props.list.map((item: HeadsClubCardProps, index: number) => (
            <HeadsClubCard key={`card${index++}`} {...item} />
          ))}
      </div>
    </div>
  );
}
