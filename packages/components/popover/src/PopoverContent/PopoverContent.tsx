import React from 'react';
import { cx } from '@emotion/css';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { usePopoverContext } from '../PopoverContext';
import { getPopoverContentStyles } from './PopoverContent.styles';
import {
  FloatingPortal,
  FloatingFocusManager,
  useMergeRefs,
  useInteractions,
} from '@floating-ui/react';

interface PopoverContentInternalProps extends CommonProps {
  children?: React.ReactNode;
}

export type PopoverContentProps = PropsWithHTMLElement<
  PopoverContentInternalProps,
  'div'
>;

const PopoverContentBase = (
  props: ExpandProps<PopoverContentProps>,
  propRef: React.Ref<HTMLElement>,
) => {
  const {
    children,
    className,
    testId = 'cf-ui-popover-content',
    role = 'dialog',
    ...otherProps
  } = props;

  const {
    isOpen,
    renderOnlyWhenOpen,
    usePortal,
    autoFocus,
    dismiss,
    context: floatingContext,
    ...context
  } = usePopoverContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  const styles = getPopoverContentStyles(isOpen);

  const { getFloatingProps } = useInteractions([dismiss]);

  if (renderOnlyWhenOpen && !isOpen) {
    return null;
  }

  const content = (
    <div
      {...otherProps}
      className={cx(styles.container, className)}
      style={{ ...context.floatingStyles }}
      {...getFloatingProps()}
      aria-describedby={context.descriptionId}
      data-test-id={testId}
      tabIndex={-1}
      role={role}
      ref={ref}
      // specific attribute to mark that this element is absolute positioned
      // for internal contentful apps usage
      data-position-absolute
    >
      {children}
    </div>
  );

  const maybeWrapWithFocusManager = (node: React.ReactElement) =>
    autoFocus === false ? (
      node
    ) : (
      <FloatingFocusManager context={floatingContext}>
        {node}
      </FloatingFocusManager>
    );

  return usePortal ? (
    <FloatingPortal>
      {maybeWrapWithFocusManager(content as React.ReactElement)}
    </FloatingPortal>
  ) : (
    maybeWrapWithFocusManager(content as React.ReactElement)
  );
};

PopoverContentBase.displayName = 'PopoverContent';

export const PopoverContent = React.forwardRef(PopoverContentBase);
