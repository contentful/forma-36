import React, { useCallback, useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Copy } from '@contentful/f36-icons';

import cn from 'classnames';
import { Tooltip } from '@contentful/f36-tooltip';
import type { TooltipPlace } from '@contentful/f36-tooltip';
import { TabFocusTrap } from '@contentful/f36-utils';
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

export function CopyButton({
  copyValue,
  className,
  testId = 'cf-ui-copy-button',
  onCopy,
  tooltipPlace,
  tooltipText = (
    <React.Fragment>
      Copy to <br /> clipboard
    </React.Fragment>
  ),
  tooltipCopiedText = <React.Fragment>Copied!</React.Fragment>,
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
          placement={tooltipPlace}
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
              <Copy variant="muted" />
            </TabFocusTrap>
          </button>
        </Tooltip>
      </CopyToClipboard>
    </div>
  );
}
