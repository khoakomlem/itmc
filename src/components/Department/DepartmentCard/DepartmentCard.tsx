import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './DepartmentCard.module.scss';

export type DepartmentCardProps = {
  readonly title: string;
  readonly content: string;
  readonly url: string;
  readonly team?: 'code' | 'design';
};

export function DepartmentCard({
  team = 'code',
  ...props
}: DepartmentCardProps): JSX.Element {
  return (
    <div
      className={classNames(styles.container, {
        [styles.code]: team === 'code',
        [styles.design]: team === 'design',
      })}
    >
      <div className={styles.content}>{props.content}</div>
      <div className={styles.bottom}>
        <div className={styles.title}>{props.title}</div>
        {/* <div className={styles.button}>
          <Link href={props.url}>Chi tiết</Link>
        </div> */}
      </div>
    </div>
  );
}
