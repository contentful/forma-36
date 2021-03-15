import React from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';
import { TabFocusTrap } from '@contentful/f36-utils';
import styles from './Pill.css';

export interface PillProps {
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
            <Icon
              icon="Drag"
              color="muted"
              className={styles[`Pill__icon--${variant}`]}
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
            <Icon
              icon="Close"
              color="muted"
              className={styles[`Pill__icon--${variant}`]}
            />
          </TabFocusTrap>
        </button>
      )}
    </div>
  );
}
