import React from 'react';
import classNames from 'classnames';
import IcomoonReact from 'icomoon-react';

import styles from './Icon.module.scss';
import iconSet from './selection.json';

export type IconProps = {
  readonly color?: string;
  readonly size?: number | string;
  readonly icon: string;
  readonly className?: string;
  readonly stroke?: string;
  readonly onClick?: () => void;
  readonly style?: React.CSSProperties;
  readonly width?: string | number;
  readonly height?: string | number;
};

const Icon: React.FC<IconProps> = (props) => {
  const {
    style,
    onClick,
    color,
    width,
    height = 20,
    size = 20,
    icon = '',
    className = '',
  } = props;

  return icon ? (
    <IcomoonReact
      width={width}
      className={classNames(styles.icon, className)}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      height={height}
      style={{ ...style }}
      onClick={onClick}
    />
  ) : null;
};

export default Icon;
