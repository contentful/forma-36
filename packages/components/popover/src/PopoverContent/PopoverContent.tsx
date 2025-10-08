import React from 'react';
import { cx } from 'emotion';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { usePopoverContext } from '../PopoverContext';
import { Portal } from '@contentful/f36-utils';
import { getPopoverContentStyles } from './PopoverContent.styles';

interface PopoverContentInternalProps extends CommonProps {
  children?: React.ReactNode;
}

export type PopoverContentProps = PropsWithHTMLElement<
  PopoverContentInternalProps,
  'div'
>;

const _PopoverContent = (props: ExpandProps<PopoverContentProps>, ref) => {
  const {
    children,
    className,
    testId = 'cf-ui-popover-content',
    role = 'dialog',
    ...otherProps
  } = props;
  const { isOpen, renderOnlyWhenOpen, getPopoverProps, usePortal } =
    usePopoverContext();

  const styles = getPopoverContentStyles(isOpen);

  const content = (
    <div
      {...otherProps}
      {...getPopoverProps(otherProps, ref)}
      className={cx(styles.container, className)}
      data-test-id={testId}
      tabIndex={-1}
      role={role}
      // specific attribute to mark that this element is absolute positioned
      // for internal contentful apps usage
      data-position-absolute
    >
      {children}
    </div>
  );

  if (renderOnlyWhenOpen && !isOpen) {
    return null;
  }

  return usePortal ? <Portal>{content}</Portal> : content;
};

export const PopoverContent = React.forwardRef(_PopoverContent);
