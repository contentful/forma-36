import React from 'react';
import { cx } from 'emotion';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { DragIcon, CloseIcon } from '@contentful/f36-icons';
import { Button } from '@contentful/f36-button';
import { PillVariants } from './types';
import { getPillStyles } from './Pill.styles';

export type PillInternalProps = CommonProps & {
  /**
   * Text that will be shown on the pill
   */
  label: string;

  /**
   * A boolean that tells if the label should be used as a native tooltip title
   * @default true
   */
  useLabelAsTitle?: boolean;
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
};

export type PillProps = PropsWithHTMLElement<PillInternalProps, 'div'>;

export const Pill = React.forwardRef<HTMLDivElement, ExpandProps<PillProps>>(
  (props, ref) => {
    const {
      label,
      onClose,
      testId = 'cf-ui-pill',
      onDrag,
      useLabelAsTitle = true,
      className,
      dragHandleComponent,
      variant = 'idle',
      ...otherProps
    } = props;

    const styles = getPillStyles(variant);

    return (
      <div
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
              <DragIcon className={styles.icon} variant="muted" />
            </span>
          ))}
        <span title={useLabelAsTitle ? label : null} className={styles.label}>
          {label}
        </span>
        {onClose && (
          <Button
            type="button"
            variant="transparent"
            startIcon={<CloseIcon aria-label="Close" />}
            aria-label="Close"
            onClick={onClose}
            className={styles.closeButton}
          />
        )}
      </div>
    );
  },
);

Pill.displayName = 'Pill';
