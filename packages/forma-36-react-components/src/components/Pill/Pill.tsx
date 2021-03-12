import React from 'react';
import cn from 'classnames';

import { Icon } from '../Icon';
import { TabFocusTrap } from '../TabFocusTrap';
import styles from './Pill.css';

export interface PillProps {
  label: string;
  onClose?: () => void;
  onDrag?: () => void;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  dragHandleComponent?: React.ReactNode;
  state?: 'idle' | 'active' | 'deleted';
}

export function Pill({
  label,
  onClose,
  testId = 'cf-ui-pill',
  onDrag,
  className,
  dragHandleComponent,
  state = 'idle',
  ...otherProps
}: PillProps): React.ReactElement {
  const classNames = cn(styles.Pill, styles[`Pill--${state}`], className);

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
              className={styles[`Pill__icon--${state}`]}
            />
          </span>
        ))}
      <span
        aria-label={label}
        title={label}
        className={cn(styles.Pill__label, styles[`Pill__label--${state}`])}
      >
        {label}
      </span>
      {onClose && state !== 'deleted' && (
        <button
          type="button"
          aria-label="close"
          onClick={onClose}
          className={cn(
            styles['Pill__close-button'],
            styles[`Pill__close-button--${state}`],
          )}
        >
          <TabFocusTrap>
            <Icon
              icon="Close"
              color="muted"
              className={styles[`Pill__icon--${state}`]}
            />
          </TabFocusTrap>
        </button>
      )}
    </div>
  );
}
