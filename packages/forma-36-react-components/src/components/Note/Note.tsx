import React from 'react';
import classNames from 'classnames';
import type { CSSProperties } from 'react';

import Icon, { IconType } from '../Icon';
import { iconName } from '../Icon/constants';
import styles from './Note.css';
import IconButton from '../IconButton';

const Icons = {
  primary: iconName.InfoCircle,
  positive: iconName.CheckCircle,
  negative: iconName.Warning,
  warning: iconName.Warning,
};

export interface NoteProps {
  noteType?: 'primary' | 'positive' | 'negative' | 'warning';
  className?: string;
  title?: string;
  style?: CSSProperties;
  testId?: string;
  children: React.ReactNode;
  hasCloseButton?: boolean;
  onClose?: Function;
}

export function Note({
  children,
  className,
  hasCloseButton,
  noteType = 'primary',
  onClose,
  style,
  testId = 'cf-ui-note',
  title,
}: NoteProps): React.ReactElement {
  const icon = Icons[noteType!] as IconType; // eslint-disable-line @typescript-eslint/no-non-null-assertion
  if (!icon) {
    throw new Error(`Intent ${noteType} is not supported in Note component.`);
  }

  return (
    <div
      style={style}
      className={classNames(styles.Note, className, {
        [styles['Note--primary']]: noteType === 'primary',
        [styles['Note--positive']]: noteType === 'positive',
        [styles['Note--negative']]: noteType === 'negative',
        [styles['Note--warning']]: noteType === 'warning',
        [styles['Note--hasCloseButton']]: hasCloseButton,
      })}
      data-test-id={testId}
    >
      <div className={styles.Note__icon}>
        <Icon icon={icon} color={noteType} />
      </div>
      <div className={styles.Note__info}>
        {title && <div className={styles.Note__title}>{title}</div>}
        <div>{children}</div>
      </div>
      {hasCloseButton && (
        <IconButton
          buttonType="secondary"
          iconProps={{ icon: 'Close' }}
          onClick={() => {
            if (onClose) {
              onClose();
            }
          }}
          testId="cf-ui-note-close"
          label="Dismiss"
          className={styles.Note__dismiss}
        />
      )}
    </div>
  );
}

export default Note;
