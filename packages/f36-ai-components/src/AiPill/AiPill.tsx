import React from 'react';
import { cx } from '@emotion/css';
import type { CommonProps } from '@contentful/f36-core';
import { PillNext } from '@contentful/f36-pill-next';
import { aiPillOverrides } from './AiPill.styles';

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

    return (
      <PillNext
        ref={ref}
        label={label}
        onRemove={onRemove}
        removeButtonLabel={removeButtonLabel}
        isDisabled={isDisabled}
        testId={testId}
        className={cx(aiPillOverrides, className)}
        {...otherProps}
      />
    );
  },
);

AiPill.displayName = 'AiPill';
