import React from 'react';
import { cx } from 'emotion';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
//import { Tooltip } from '@contentful/f36-tooltip';
import { XIcon } from '@contentful/f36-icons';
import { Button } from '@contentful/f36-button';
import { DragHandle } from '@contentful/f36-drag-handle';
import { PillVariants } from './types';
import { getPillStyles } from './Pill.styles';

export type PillInternalProps = CommonProps & {
  /**
   * Mark the pill as draggable. Drag icon is rendered when this property is set.
   */
  isDraggable?: boolean;
  /**
   * Text that will be shown on the pill
   */
  label: string;
  /**
   * Function that handles when the close icon is clicked. Close icon visibility depends on if this property is set.
   */
  onClose?: () => void;

  /**
   * Aria label for close button
   * @default 'Close'
   */
  closeButtonAriaLabel?: string;

  /**
   * Function that handles when the pill is dragged. Drag icon is rendered when this property is set.
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
      isDraggable,
      label,
      onClose,
      closeButtonAriaLabel = 'Close',
      testId = 'cf-ui-pill',
      onDrag,
      className,
      dragHandleComponent,
      variant = 'idle',
      ...otherProps
    } = props;

    const styles = getPillStyles(variant);
    const [textIsTruncated, setTextIsTruncated] = React.useState(false);

    const trackRefChange = React.useCallback(
      (ref: HTMLDivElement | null) => {
        if (!ref) {
          return;
        }
        const { scrollWidth, offsetWidth } = ref.parentElement;
        setTextIsTruncated(scrollWidth > offsetWidth);
      },
      [setTextIsTruncated],
    );

    return (
      <div
        className={cx(styles.pill, className)}
        data-test-id={testId}
        onDrag={onDrag}
        ref={ref}
        {...otherProps}
      >
        {(isDraggable || onDrag) &&
          (dragHandleComponent ? (
            dragHandleComponent
          ) : (
            <DragHandle label="Reorder item" variant="transparent" />
          ))}

        <span ref={trackRefChange}>{label}</span>

        {/* <Tooltip
          content={label}
          maxWidth="none"
          targetWrapperClassName={styles.label}
          isDisabled={!textIsTruncated}
        >
          <span ref={trackRefChange}>{label}</span>
        </Tooltip> */}
        {onClose && (
          <Button
            type="button"
            variant="transparent"
            startIcon={<XIcon />}
            aria-label={closeButtonAriaLabel}
            onClick={onClose}
            className={styles.closeButton}
          />
        )}
      </div>
    );
  },
);

Pill.displayName = 'Pill';
