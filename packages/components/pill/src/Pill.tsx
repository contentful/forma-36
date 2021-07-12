import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Box } from '@contentful/f36-core';
import { TabFocusTrap } from '@contentful/f36-utils';
import { Drag, Close } from '@contentful/f36-icons';
import { PillVariants } from './types';
import getPillStyles from './styles';

export interface PillProps extends CommonProps {
  /**
   * Text that will be shown on the pill
   */
  label: string;
  /**
   * Function that handles when the close icon is clicked. Close icon visibility depends on if this property is set.
   */
  onClose?: () => void;
  /**
   * Function that handles when the pill is dragged. Drag icon visibility depends on if this property is set.
   */
  onDrag?: () => void;
  /**
   * Custom component to be used as handler for the drag functionality.
   */
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
          <span aria-label="Drag handler" className={styles.dragIcon}>
            <Drag className={styles.icon} variant="muted" />
          </span>
        ))}
      <span title={label} className={styles.label}>
        {label}
      </span>
      {onClose && (
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

export const Pill = React.forwardRef(_Pill);
