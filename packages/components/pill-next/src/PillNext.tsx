import React from 'react';
import { cx } from '@emotion/css';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import {
  Tooltip,
  type TooltipInternalProps,
  type WithEnhancedContent,
} from '@contentful/f36-tooltip';
import { IconButton } from '@contentful/f36-button';
import { WarningIcon, WarningOctagonIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import type { PillNextVariant } from './PillNext.types';
import { getPillNextStyles } from './PillNext.styles';

export type PillNextInternalProps = CommonProps & {
  label: string;
  variant?: PillNextVariant;
  isDisabled?: boolean;
  /** Only rendered for variants with a leading icon (warning/negative). */
  tooltipContent?: string;
  tooltipProps?: Omit<
    CommonProps & WithEnhancedContent & TooltipInternalProps,
    'content' | 'children' | 'withTriggerWrapper'
  >;
  /** Content rendered between label and end action button. */
  children?: React.ReactNode;
  /** Icon element rendered as the end action button. */
  actionIcon?: React.ReactElement;
  /** Callback fired when the action button is clicked. */
  onAction?: () => void;
  /** Accessible label for the action button. */
  actionButtonLabel?: string;
  /** Additional className applied to the action button. */
  actionButtonClassName?: string;
};

export type PillNextProps = PropsWithHTMLElement<PillNextInternalProps, 'div'>;

const leadingIcons: Partial<
  Record<
    PillNextVariant,
    React.ComponentType<{ color?: string; size?: string }>
  >
> = {
  warning: WarningIcon,
  negative: WarningOctagonIcon,
};

const leadingIconColors: Partial<Record<PillNextVariant, string>> = {
  warning: tokens.orange400,
  negative: tokens.red600,
};

export const PillNext = React.forwardRef<
  HTMLDivElement,
  ExpandProps<PillNextProps>
>((props, ref) => {
  const {
    label,
    variant = 'secondary',
    isDisabled = false,
    tooltipContent,
    tooltipProps,
    children,
    actionIcon,
    onAction,
    actionButtonLabel,
    actionButtonClassName,
    testId = 'cf-ui-pill-next',
    className,
    ...otherProps
  } = props;

  const styles = getPillNextStyles(variant, Boolean(actionIcon));

  const LeadingIcon = leadingIcons[variant];
  const iconColor = leadingIconColors[variant];

  const leadingIconElement = LeadingIcon ? (
    <span
      className={styles.leadingIcon}
      tabIndex={tooltipContent ? 0 : undefined}
      role={tooltipContent ? 'img' : undefined}
      aria-label={tooltipContent || undefined}
    >
      <LeadingIcon color={iconColor} size="small" />
    </span>
  ) : null;

  return (
    <div
      className={cx(styles.pill, className)}
      data-test-id={testId}
      ref={ref}
      {...otherProps}
    >
      {leadingIconElement &&
        (tooltipContent ? (
          <Tooltip
            content={tooltipContent}
            placement="bottom"
            targetWrapperClassName={styles.leadingIconWrapper}
            {...tooltipProps}
          >
            {leadingIconElement}
          </Tooltip>
        ) : (
          <span className={styles.leadingIconWrapper}>
            {leadingIconElement}
          </span>
        ))}

      <span className={styles.label}>{label}</span>

      {children}

      {actionIcon && (
        <IconButton
          variant="transparent"
          size="small"
          icon={actionIcon}
          aria-label={actionButtonLabel}
          onClick={onAction}
          isDisabled={isDisabled}
          className={cx(styles.endButton, actionButtonClassName)}
        />
      )}
    </div>
  );
});

PillNext.displayName = 'PillNext';
