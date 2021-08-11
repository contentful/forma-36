import { cx } from 'emotion';
import React, { useState, useCallback, useRef } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { CommonProps } from '@contentful/f36-core';
import { Copy } from '@contentful/f36-icons';
import { Tooltip } from '@contentful/f36-tooltip';
import { Box } from '@contentful/f36-core';
import type { TooltipProps } from '@contentful/f36-tooltip';
import { getStyles } from './CopyButton.styles';

const DEFAULT_TAG = 'div';

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
   * HTML element used to wrap the CopyButton
   * @default div
   */
  as?: React.ElementType;
  /**
   * Value that will be copied to clipboard when the button is clicked
   */
  value: string;
  /**
   * Label to be used on aria-label for the button
   * @default Copy {value} to clipboard
   */
  label?: string;
}

function _CopyButton(props: CopyButtonProps, ref: React.Ref<HTMLElement>) {
  const {
    as = DEFAULT_TAG,
    onCopy,
    value,
    className,
    testId = 'cf-ui-copy-button',
    tooltipText = 'Copy to clipboard',
    tooltipCopiedText = 'Copied!',
    tooltipProps,
    ...otherProps
  } = props;
  const styles = getStyles();

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
    <Box
      as={as}
      ref={ref}
      data-test-id={testId}
      className={cx(styles.wrapper, className)}
      {...otherProps}
    >
      <CopyToClipboard text={value} onCopy={handleOnCopy}>
        <Tooltip
          content={copied ? tooltipCopiedText : tooltipText}
          {...tooltipProps}
        >
          <button
            type="button"
            ref={button}
            className={cx(styles.copyButton)}
            aria-label={`Copy ${value} to clipboard`}
          >
            <Copy variant="muted" />
          </button>
        </Tooltip>
      </CopyToClipboard>
    </Box>
  );
}

export const CopyButton = React.forwardRef(_CopyButton);
