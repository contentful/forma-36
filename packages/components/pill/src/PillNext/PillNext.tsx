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
import { getPillNextStyles } from './PillNext.styles';

export type PillNextInternalProps = CommonProps & {
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
    onRemove,
    removeButtonLabel = 'Remove',
    isDisabled = false,
    tooltipContent,
    tooltipProps,
    testId = 'cf-ui-pill-next',
    className,
    ...otherProps
  } = props;

  const styles = getPillNextStyles(variant);
  const [textIsTruncated, setTextIsTruncated] = React.useState(false);

  const labelRef = React.useCallback((node: HTMLSpanElement | null) => {
    if (!node) return;
    setTextIsTruncated(node.scrollWidth > node.offsetWidth);
  }, []);

  const LeadingIcon = leadingIcons[variant];
  const iconColor = leadingIconColors[variant];

  const leadingIconElement = LeadingIcon ? (
    <span className={styles.leadingIcon}>
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
            {...tooltipProps}
          >
            {leadingIconElement}
          </Tooltip>
        ) : (
          leadingIconElement
        ))}

      <Tooltip
        content={label}
        maxWidth="none"
        isDisabled={!textIsTruncated}
        targetWrapperClassName={styles.labelWrapper}
      >
        <span className={styles.label} ref={labelRef}>
          {label}
        </span>
      </Tooltip>

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
});

PillNext.displayName = 'PillNext';
