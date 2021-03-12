import React from 'react';
import classNames from 'classnames';
import { Primitive } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

import { Icon, IconType } from '../Icon';
import { iconName } from '../Icon/constants';
import styles from './Note.css';
import { IconButton } from '../IconButton';

const Icons = {
  primary: iconName.InfoCircle,
  positive: iconName.CheckCircle,
  negative: iconName.ErrorCircle,
  warning: iconName.Warning,
};

export interface NoteProps extends CommonProps {
  noteType?: 'primary' | 'positive' | 'negative' | 'warning';
  title?: string;
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
    <Primitive
      as="div"
      style={style}
      className={classNames(styles.Note, className, {
        [styles[`Note--${noteType}`]]: noteType,
        [styles['Note--hasCloseButton']]: hasCloseButton,
      })}
      testId={testId}
    >
      <div className={styles.Note__icon}>
        <Icon icon={icon} color={noteType} size={title ? 'medium' : 'small'} />
      </div>
      <div className={styles.Note__info}>
        {title && <div className={styles.Note__title}>{title}</div>}
        <div className={styles.Note__content}>{children}</div>
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
    </Primitive>
  );
}
