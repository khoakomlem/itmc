import { type MouseEventHandler, type ReactElement } from 'react';
import classNames from 'classnames';

import CustomImage from '../CustomImage/CustomImage';
import styles from './Modal.module.scss';

export type ModalProps = {
  readonly children?: ReactElement | ReactElement[];
  readonly visible?: boolean;
  readonly transparent?: boolean;
  readonly title?: any;
  readonly titleClassName?: string;
  readonly headerClassName?: string;
  readonly subTitle?: string;
  readonly closable?: boolean;
  readonly width?: string | number;
  readonly height?: string | number;
  readonly maxHeight?: string | number;
  readonly maxWidth?: string | number;
  readonly mobilePosition?: 'center' | 'bottom' | 'top' | 'left' | 'right';
  readonly backdrop?: boolean;
  readonly mobileFullHeight?: boolean;
  readonly containerClassName?: string;
  readonly contentClassName?: string;
  readonly className?: string;
  readonly style?: any;
  readonly modalBackgroundUrl?: string;
  readonly onClose?: () => void;
};

function Modal(props: ModalProps) {
  const {
    children,
    visible,
    title,
    transparent,
    width,
    height,
    className,
    titleClassName,
    headerClassName,
    maxHeight,
    maxWidth,
    closable = true,
    mobilePosition = 'bottom',
    mobileFullHeight,
    containerClassName,
    contentClassName,
    backdrop = true,
    subTitle,
    style,
    modalBackgroundUrl,
    onClose,
  } = props;

  const modalClassName = classNames(
    styles.modal,
    className,
    styles[mobilePosition],
    {
      [styles.show]: visible,
      [styles.no_backdrop]: !backdrop,
      [styles.transparent]: transparent,
      [styles.full_height]: mobileFullHeight,
    }
  );

  const modalContainerClassName = classNames(
    styles.container,
    containerClassName
  );

  const modalContentClassName = classNames(styles.content, contentClassName);

  const handleOnBlurModal: MouseEventHandler<HTMLDivElement> = (e) => {
    e.target === e.currentTarget && onClose?.();
  };

  const containerHeight = () => {
    if (height) {
      return visible ? height : 0;
    }

    return undefined;
  };

  return (
    <div style={style} className={modalClassName} onClick={handleOnBlurModal}>
      {modalBackgroundUrl && (
        <div className={styles.modal_background}>
          <CustomImage
            priority
            fill
            src={modalBackgroundUrl}
            alt='media'
            quality={50}
          />
        </div>
      )}
      <div
        style={{
          width,
          maxHeight,
          maxWidth,
          height: containerHeight(),
        }}
        className={modalContainerClassName}
      >
        {title && (
          <div className={classNames(styles.header, headerClassName)}>
            <div>
              <div className={classNames(styles.title, titleClassName)}>
                {title}
              </div>
              {subTitle && <div className={styles.sub_title}>{subTitle}</div>}
            </div>
            {closable && (
              <div className={styles.close} onClick={onClose}>
                &#x2715;
              </div>
            )}
          </div>
        )}
        <div className={modalContentClassName}>{children}</div>
      </div>
    </div>
  );
}

export function ModalHeader(props: {
  readonly children: ReactElement | ReactElement[] | string;
  readonly className?: string;
  readonly alignTitle?: 'center' | 'left';
}) {
  const { children, alignTitle = 'left', className } = props;
  const headerClassName = classNames(styles.header, className, {
    [styles.center]: alignTitle === 'center',
  });
  return <div className={headerClassName}>{children}</div>;
}

export function ModalFooter(props: {
  readonly children: ReactElement | ReactElement[];
  readonly className?: string;
}) {
  const { children, className } = props;
  return <div className={`${styles.footer} ${className}`}>{children}</div>;
}

export default Modal;
