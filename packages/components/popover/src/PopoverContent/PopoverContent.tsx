import React, { HTMLProps } from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';
import { usePopoverContext } from '../PopoverContext';
import { Portal } from '@contentful/f36-utils';
import { styles } from './PopoverContent.styles';

interface PopoverContentProps
  extends Omit<HTMLProps<HTMLDivElement>, 'ref'>,
    CommonProps {}

const PopoverContent = (props: PopoverContentProps, ref) => {
  const {
    children,
    className,
    testId = 'cf-ui-popover-content',
    ...otherProps
  } = props;

  const { isOpen, getPopoverProps, usePortal } = usePopoverContext();

  const content = (
    <div
      {...getPopoverProps(otherProps, ref)}
      className={cx(styles.container(), className)}
      data-test-id={testId}
      tabIndex={-1}
      role="dialog"
      // specific attribute to mark that this element is absolute positioned
      // for internal contentful apps usage
      data-position-absolute
    >
      {children}
    </div>
  );

  if (!isOpen) {
    return null;
  }

  return usePortal ? <Portal>{content}</Portal> : content;
};

const _PopoverContent = React.forwardRef(PopoverContent);
export { _PopoverContent as PopoverContent };
