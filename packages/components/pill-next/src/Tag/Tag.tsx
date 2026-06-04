import React from 'react';
import { css } from '@emotion/css';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';
import { PillNext } from '../PillNext';
import type { PillNextVariant } from '../PillNext.types';
import type {
  TooltipInternalProps,
  WithEnhancedContent,
} from '@contentful/f36-tooltip';

export type TagInternalProps = CommonProps & {
  label: string;
  variant?: PillNextVariant;
  isDisabled?: boolean;
  /** Only rendered for variants with a leading icon (warning/negative). */
  tooltipContent?: string;
  tooltipProps?: Omit<
    CommonProps & WithEnhancedContent & TooltipInternalProps,
    'content' | 'children' | 'withTriggerWrapper'
  >;
  /** Badge element rendered between label and end icon. */
  badge: React.ReactNode;
  /** Icon element rendered as the end action button. */
  actionIcon?: React.ReactElement;
  /** Callback fired when the action button is clicked. */
  onAction?: () => void;
  /** Accessible label for the action button. */
  actionButtonLabel?: string;
  /** Additional className applied to the action button. */
  actionButtonClassName?: string;
};

export type TagProps = TagInternalProps & {
  className?: string;
};

const badgeStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  marginLeft: tokens.spacing2Xs,
});

export const Tag = React.forwardRef<HTMLDivElement, ExpandProps<TagProps>>(
  (props, ref) => {
    const { badge, testId = 'cf-ui-tag', ...pillProps } = props;

    return (
      <PillNext ref={ref} testId={testId} {...pillProps}>
        <span className={badgeStyle}>{badge}</span>
      </PillNext>
    );
  },
);

Tag.displayName = 'Tag';
