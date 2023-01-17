import React, {
  useState,
  useCallback,
  useRef,
  type MouseEventHandler,
  useEffect,
} from 'react';
import { CopyIcon } from '@contentful/f36-icons';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import { Tooltip, type TooltipProps } from '@contentful/f36-tooltip';
import { Button, type ButtonProps } from '@contentful/f36-button';
import { getCopyButtonStyles } from './CopyButton.styles';

function isPromiseLike<T>(x: T | PromiseLike<T>): x is PromiseLike<T> {
  return (
    (typeof x === 'object' || typeof x === 'function') &&
    typeof (x as PromiseLike<T>).then === 'function'
  );
}

type StringValue = {
  preload?: never;
  /**
   * Value that will be copied to clipboard when the button is clicked
   */
  value: string;
};

type PromiseValue = {
  preload?: boolean;
  /**
   * Value that will be copied to clipboard when the button is clicked
   */
  value: () => Promise<string>;
};

export type CopyButtonProps = CommonProps & {
  /**
   * Props that are passed to the button component
   */
  buttonProps?: Omit<ButtonProps, 'size'>;
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
   * @default medium
   */
  size?: 'small' | 'medium';
} & (StringValue | PromiseValue);

function _CopyButton(
  {
    buttonProps,
    onCopy,
    value,
    className,
    label,
    testId = 'cf-ui-copy-button',
    tooltipText = 'Copy to clipboard',
    tooltipCopiedText = 'Copied!',
    tooltipProps,
    isDisabled = false,
    preload,
    size = 'medium',
    ...otherProps
  }: ExpandProps<CopyButtonProps>,
  ref: React.Ref<HTMLDivElement>,
) {
  const styles = getCopyButtonStyles({ size });
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const button = useRef<HTMLButtonElement | null>(null);
  const resolvedValue = useRef<string | Promise<string>>(
    typeof value === 'function' ? value() : value,
  );

  useEffect(() => {
    const load = async () => {
      if (preload && isPromiseLike(resolvedValue.current)) {
        resolvedValue.current = await resolvedValue.current;
      }
    };

    load();
  }, [preload, value]);

  const handleClick = useCallback<
    MouseEventHandler<HTMLButtonElement>
  >(async () => {
    if (isPromiseLike(resolvedValue.current)) {
      setIsLoading(true);
      console.log('loading', resolvedValue.current);
      resolvedValue.current = await resolvedValue.current;
      console.log('done', resolvedValue.current);
      setIsLoading(false);
    }

    await window.navigator.clipboard.writeText(resolvedValue.current);
    onCopy?.(resolvedValue.current);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
      if (button.current) {
        button.current.blur();
      }
    }, 1000);
  }, [onCopy]);

  useEffect(() => {
    console.log('isLoading', isLoading);
  }, [isLoading]);

  return (
    <div ref={ref} data-test-id={testId} className={className} {...otherProps}>
      <Tooltip
        content={copied ? tooltipCopiedText : tooltipText}
        {...tooltipProps}
        isDisabled={isDisabled}
      >
        <Button
          aria-label={
            label ??
            `Copy ${
              isPromiseLike(resolvedValue.current)
                ? ''
                : `"${resolvedValue.current}" `
            }to clipboard`
          }
          aria-live="assertive"
          className={styles.button}
          isDisabled={isLoading || isDisabled}
          isLoading={isLoading}
          onClick={handleClick}
          ref={button}
          startIcon={
            <CopyIcon
              variant="muted"
              size={size === 'small' ? 'tiny' : 'small'}
            />
          }
          variant="secondary"
          {...buttonProps}
        />
      </Tooltip>
    </div>
  );
}

_CopyButton.displayName = 'CopyButton';

export const CopyButton = React.forwardRef(_CopyButton);
