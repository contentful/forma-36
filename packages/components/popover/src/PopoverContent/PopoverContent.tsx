import React from 'react';
import { cx } from 'emotion';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { usePopoverContext } from '../PopoverContext';
import { getPopoverContentStyles } from './PopoverContent.styles';
import { FloatingPortal } from '@floating-ui/react';

interface PopoverContentInternalProps extends CommonProps {
  children?: React.ReactNode;
}

export type PopoverContentProps = PropsWithHTMLElement<
  PopoverContentInternalProps,
  'div'
>;

const _PopoverContent = (
  props: ExpandProps<PopoverContentProps>,
  propRef: React.Ref<any>,
) => {
  const {
    children,
    className,
    testId = 'cf-ui-popover-content',
    role = 'dialog',
    ...otherProps
  } = props;
  const { isOpen, renderOnlyWhenOpen, usePortal } = usePopoverContext();

  const styles = getPopoverContentStyles(isOpen);

  const content = (
    <div
      {...otherProps}
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

  return usePortal ? <FloatingPortal>{content}</FloatingPortal> : content;
};

export const PopoverContent = React.forwardRef(_PopoverContent);
