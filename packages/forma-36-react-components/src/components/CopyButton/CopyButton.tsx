import React, { useCallback, useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import cn from 'classnames';
import Icon from '../Icon';
import { Tooltip } from '../Tooltip';
import type { TooltipPlace } from '../Tooltip';
import TabFocusTrap from '../TabFocusTrap';
import styles from './CopyButton.css';

export interface CopyButtonProps {
  copyValue?: string;
  onCopy?: (value: string) => void;
  className?: string;
  testId?: string;
  tooltipPlace?: TooltipPlace;
  tooltipText?: React.ReactNode;
  tooltipCopiedText?: React.ReactNode;
}

export interface CopyButtonState {
  copied: boolean;
}

export function CopyButton({
  copyValue,
  className,
  testId,
  onCopy,
  tooltipPlace,
  tooltipText,
  tooltipCopiedText,
  ...otherProps
}: CopyButtonProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const button = useRef<HTMLButtonElement | null>(null);
  const tooltipAnchor = useRef<HTMLDivElement | null>(null);

  const handleCopy = useCallback(
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

  const classNames = cn(styles['CopyButton'], className);

  return (
    <div
      ref={tooltipAnchor}
      className={classNames}
      id="copyButton"
      data-test-id={testId}
      {...otherProps}
    >
      <CopyToClipboard text={copyValue || ''} onCopy={handleCopy}>
        <Tooltip
          place={tooltipPlace}
          content={
            copied ? (
              <span>{tooltipCopiedText}</span>
            ) : (
              <span>{tooltipText}</span>
            )
          }
        >
          <button
            type="button"
            ref={button}
            className={styles['CopyButton__button']}
          >
            <TabFocusTrap className={styles['CopyButton__TabFocusTrap']}>
              <span className={styles['CopyButton__text']}>
                Copy {copyValue} to clipboard
              </span>
              <Icon icon="Copy" color="muted" />
            </TabFocusTrap>
          </button>
        </Tooltip>
      </CopyToClipboard>
    </div>
  );
}

CopyButton.defaultProps = {
  testId: 'cf-ui-copy-button',
  tooltipText: (
    <React.Fragment>
      Copy to <br /> clipboard
    </React.Fragment>
  ),
  tooltipCopiedText: <React.Fragment>Copied!</React.Fragment>,
};

export default CopyButton;
