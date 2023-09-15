import classNames from 'classnames';
import { isArray } from 'lodash';

import { cn } from '@/utils';

import styles from './Department.module.scss';
import {
  DepartmentCard,
  type DepartmentCardProps,
} from './DepartmentCard/DepartmentCard';

export type DepartmentProps = {
  readonly title: string;
  readonly list: DepartmentCardProps[];
  readonly className?: string;
};

export function Department(props: DepartmentProps) {
  return (
    <div
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 rounded-[30px] mt-3 py-8 sm:py-3 shadow-sm overflow:auto',
        props.className
      )}
    >
      <h1
        className={classNames(
          'gradient-text py-8 sm:py-3 font-[Inter] font-extrabold title w-auto',
          styles.title
        )}
      >
        {props.title}
      </h1>
      <div className={styles.wrapper}>
        {isArray(props.list) &&
          props.list.map((item: DepartmentCardProps, index: number) => (
            <DepartmentCard key={`card${index++}`} {...item} />
          ))}
      </div>
    </div>
  );
}
