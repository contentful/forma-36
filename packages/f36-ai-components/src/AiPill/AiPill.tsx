import React from 'react';
import { cx } from '@emotion/css';
import type { CommonProps } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';
import { PillNext } from '@contentful/f36-pill-next';
import {
  aiPillOverrides,
  aiPillWithAction,
  aiPillActionButton,
} from './AiPill.styles';

export interface AiPillProps extends CommonProps {
  label: string;
  /** The icon element to render as the end action. */
  actionIcon?: React.ReactElement;
  /** Callback fired when the action button is clicked. Required when actionIcon is provided. */
  onAction?: () => void;
  /** Accessible label for the action button. Required when actionIcon is provided. */
  actionButtonLabel?: string;
  isDisabled?: boolean;
  className?: string;
}

export const AiPill = React.forwardRef<HTMLDivElement, AiPillProps>(
  (props, ref) => {
    const {
      label,
      actionIcon,
      onAction,
      actionButtonLabel,
      isDisabled = false,
      testId = 'cf-ui-ai-pill',
      className,
      ...otherProps
    } = props;

    return (
      <PillNext
        ref={ref}
        label={label}
        isDisabled={isDisabled}
        testId={testId}
        className={cx(
          aiPillOverrides,
          actionIcon && aiPillWithAction,
          className,
        )}
        {...otherProps}
      >
        {actionIcon && (
          <button
            type="button"
            aria-label={actionButtonLabel}
            disabled={isDisabled}
            onClick={onAction}
            className={aiPillActionButton}
          >
            {React.cloneElement(
              actionIcon as React.ReactElement<{
                size?: string;
                color?: string;
              }>,
              { size: 'small', color: tokens.purple600 },
            )}
          </button>
        )}
      </PillNext>
    );
  },
);

AiPill.displayName = 'AiPill';
