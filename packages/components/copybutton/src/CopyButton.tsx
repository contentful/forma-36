import { cx } from 'emotion';
import React, { useState, useCallback, useRef } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CopyIcon } from '@contentful/f36-icons';
import type { CommonProps } from '@contentful/f36-core';
import { Tooltip } from '@contentful/f36-tooltip';
import type { TooltipProps } from '@contentful/f36-tooltip';
import { getStyles } from './CopyButton.styles';

export interface CopyButtonProps extends CommonProps {
  /**
   * Function that gets called when the button is clicked
   */
  onCopy?: (string) => void;
  /**
   * Text to be shown when the button is clicked
   * @default Copied!
   */
  tooltipCopiedText?: string;
  /**
   * Text to be shown when button is hovered or focused
   * @default Copy to clipboard
   */
  tooltipText?: string;
  /**
   * Props that are passed to the tooltip component
   */
  tooltipProps?: Omit<TooltipProps, 'content' | 'children'>;
  /**
   * Value that will be copied to clipboard when the button is clicked
   */
  value: string;
  /**
   * Label to be used on aria-label for the button
   * @default Copy {value} to clipboard
   */
  label?: string;
  /**
   * Allows to disable the copy button, when true the tooltip would not be shown
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Allows setting size of the copy button to small
   * @default 'default'
   */
  size?: 'small' | 'default';
}

function _CopyButton(props: CopyButtonProps, ref: React.Ref<HTMLDivElement>) {
  const {
    onCopy,
    value,
    className,
    testId = 'cf-ui-copy-button',
    tooltipText = 'Copy to clipboard',
    tooltipCopiedText = 'Copied!',
    tooltipProps,
    isDisabled = false,
    size = 'default',
    ...otherProps
  } = props;
  const styles = getStyles({ size });

  const [copied, setCopied] = useState(false);
  const button = useRef<HTMLButtonElement | null>(null);
  const handleOnCopy = useCallback(
    (e: string) => {
      if (onCopy) {
        onCopy(e);
      }

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
        if (button.current) {
          button.current.blur();
        }
      }, 1000);
    },
    [onCopy],
  );

  return (
    <div
      ref={ref}
      data-test-id={testId}
      className={cx(styles.wrapper, className)}
      {...otherProps}
    >
      <CopyToClipboard text={value} onCopy={handleOnCopy}>
        <Tooltip
          content={copied ? tooltipCopiedText : tooltipText}
          {...tooltipProps}
          isDisabled={isDisabled}
        >
          <button
            type="button"
            ref={button}
            className={cx(styles.copyButton, {
              [styles.copyButtonDisabled]: isDisabled,
            })}
            aria-label={`Copy ${value} to clipboard`}
            disabled={isDisabled}
          >
            <CopyIcon
              variant="muted"
              size={size === 'small' ? 'tiny' : 'small'}
            />
          </button>
        </Tooltip>
      </CopyToClipboard>
    </div>
  );
}

export const CopyButton = React.forwardRef(_CopyButton);
