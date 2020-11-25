import React from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap';

import styles from './Pill.css';

export interface PillProps {
  label: string;
  onClose?: () => void;
  onDrag?: () => void;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  dragHandleComponent?: React.ReactNode;
}

export function Pill({
  label,
  onClose,
  testId,
  onDrag,
  className,
  dragHandleComponent,
  ...otherProps
}: PillProps): React.ReactElement {
  const classNames = cn(styles.Pill, className);

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
            <Icon icon="Drag" color="muted" className={styles.Pill__icon} />
          </span>
        ))}
      <span aria-label={label} title={label} className={styles.Pill__label}>
        {label}
      </span>
      {onClose && (
        <button
          type="button"
          aria-label="close"
          onClick={onClose}
          className={styles['Pill__close-button']}
        >
          <TabFocusTrap>
            <Icon icon="Close" color="muted" className={styles.Pill__icon} />
          </TabFocusTrap>
        </button>
      )}
    </div>
  );
}

Pill.defaultProps = {
  testId: 'cf-ui-pill',
};

export default Pill;
