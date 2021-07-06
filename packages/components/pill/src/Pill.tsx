import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Box } from '@contentful/f36-core';
import { TabFocusTrap } from '@contentful/f36-utils';
import { Drag, Close } from '@contentful/f36-icons';
import { PillVariants } from './types';
import getPillStyles from './styles';

export interface PillProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonProps {
  label: string;
  onClose?: () => void;
  onDrag?: () => void;
  dragHandleComponent?: React.ReactNode;
  /**
   * Determines style variation of Pill component
   * @default idle
   */
  variant?: PillVariants;
}

function _Pill(props: PillProps, ref: React.Ref<HTMLDivElement>) {
  const {
    label,
    onClose,
    testId = 'cf-ui-pill',
    onDrag,
    className,
    dragHandleComponent,
    variant = 'idle',
    ...otherProps
  } = props;

  const styles = getPillStyles(variant);

  return (
    <Box
      as="div"
      className={cx(styles.pill, className)}
      data-test-id={testId}
      onDrag={onDrag}
      ref={ref}
      {...otherProps}
    >
      {onDrag &&
        (dragHandleComponent ? (
          dragHandleComponent
        ) : (
          <span className={styles.dragIcon}>
            <Drag className={styles.icon} variant="muted" />
          </span>
        ))}
      <span aria-label={label} title={label} className={styles.label}>
        {label}
      </span>
      {onClose && variant !== 'deleted' && (
        <button
          type="button"
          aria-label="close"
          onClick={onClose}
          className={styles.closeButton}
        >
          <TabFocusTrap>
            <Close className={styles.icon} variant="muted" />
          </TabFocusTrap>
        </button>
      )}
    </Box>
  );
}

/**
 * TODO: Add description of component here.
 */
export const Pill = React.forwardRef(_Pill);
