import React from 'react';
import { cx } from '@emotion/css';
import type { CommonProps } from '@contentful/f36-core';
import { IconButton } from '@contentful/f36-button';
import { XIcon } from '@contentful/f36-icons';
import { getAiPillStyles } from './AiPill.styles';

export interface AiPillProps extends CommonProps {
  label: string;
  onRemove?: () => void;
  /** @default "Remove" */
  removeButtonLabel?: string;
  isDisabled?: boolean;
  className?: string;
}

export const AiPill = React.forwardRef<HTMLDivElement, AiPillProps>(
  (props, ref) => {
    const {
      label,
      onRemove,
      removeButtonLabel = 'Remove',
      isDisabled = false,
      testId = 'cf-ui-ai-pill',
      className,
      ...otherProps
    } = props;

    const styles = getAiPillStyles(Boolean(onRemove));

    return (
      <div
        className={cx(styles.pill, className)}
        data-test-id={testId}
        ref={ref}
        {...otherProps}
      >
        <span className={styles.label}>{label}</span>

        {onRemove && (
          <IconButton
            variant="transparent"
            size="small"
            icon={<XIcon size="small" />}
            aria-label={removeButtonLabel}
            onClick={onRemove}
            isDisabled={isDisabled}
            className={styles.removeButton}
          />
        )}
      </div>
    );
  },
);

AiPill.displayName = 'AiPill';
