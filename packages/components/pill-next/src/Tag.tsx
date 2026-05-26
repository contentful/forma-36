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
import { XIcon, WarningIcon, WarningOctagonIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import type { PillNextVariant } from './PillNext.types';
import { getTagStyles } from './Tag.styles';

export type TagInternalProps = CommonProps & {
  label: string;
  variant?: PillNextVariant;
  onRemove?: () => void;
  /** @default "Remove" */
  removeButtonLabel?: string;
  isDisabled?: boolean;
  /** Only rendered for variants with a leading icon (warning/negative). */
  tooltipContent?: string;
  tooltipProps?: Omit<
    CommonProps & WithEnhancedContent & TooltipInternalProps,
    'content' | 'children' | 'withTriggerWrapper'
  >;
  /** Optional badge element rendered between label and end icon. */
  badge?: React.ReactNode;
};

export type TagProps = PropsWithHTMLElement<TagInternalProps, 'div'>;

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

export const Tag = React.forwardRef<HTMLDivElement, ExpandProps<TagProps>>(
  (props, ref) => {
    const {
      label,
      variant = 'secondary',
      onRemove,
      removeButtonLabel = 'Remove',
      isDisabled = false,
      tooltipContent,
      tooltipProps,
      badge,
      testId = 'cf-ui-tag',
      className,
      ...otherProps
    } = props;

    const styles = getTagStyles(variant, Boolean(onRemove));

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
        className={cx(styles.tag, className)}
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

        {badge && <span className={styles.badge}>{badge}</span>}

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

Tag.displayName = 'Tag';
