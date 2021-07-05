import React from 'react';
import cn from 'classnames';
import { TabFocusTrap } from '@contentful/f36-utils';
import { Drag, Close } from '@contentful/f36-icons';

import styles from './Pill.css';

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  onClose?: () => void;
  onDrag?: () => void;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  dragHandleComponent?: React.ReactNode;
  variant?: 'idle' | 'active' | 'deleted';
}

export function Pill({
  label,
  onClose,
  testId = 'cf-ui-pill',
  onDrag,
  className,
  dragHandleComponent,
  variant = 'idle',
  ...otherProps
}: PillProps): React.ReactElement {
  const classNames = cn(styles.Pill, styles[`Pill--${variant}`], className);

  return (
    <div
      className={classNames}
      data-test-id={testId}
      {...otherProps}
      onDrag={onDrag}
    >
      {onDrag &&
        (dragHandleComponent ? (
          dragHandleComponent
        ) : (
          <span className={styles['Pill__drag-icon']}>
            <Drag
              className={styles[`Pill__icon--${variant}`]}
              variant="muted"
            />
          </span>
        ))}
      <span
        aria-label={label}
        title={label}
        className={cn(styles.Pill__label, styles[`Pill__label--${variant}`])}
      >
        {label}
      </span>
      {onClose && variant !== 'deleted' && (
        <button
          type="button"
          aria-label="close"
          onClick={onClose}
          className={cn(
            styles['Pill__close-button'],
            styles[`Pill__close-button--${variant}`],
          )}
        >
          <TabFocusTrap>
            <Close
              className={styles[`Pill__icon--${variant}`]}
              variant="muted"
            />
          </TabFocusTrap>
        </button>
      )}
    </div>
  );
}
