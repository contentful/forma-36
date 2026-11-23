import React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import {
  Button,
  IconButton,
  type ButtonProps,
  type IconButtonProps,
} from '@contentful/f36-button';
import { useMenuContext } from '../MenuContext';

interface TextTriggerButtonProps extends Omit<
  ButtonProps<'button'>,
  'children'
> {
  /**
   * Label when used as a TextButton
   */
  title: string;
}

type IconTriggerButtonProps = IconButtonProps<'button'>;

export type MenuTriggerButtonProps =
  TextTriggerButtonProps | IconTriggerButtonProps;

function isTextTriggerButtonProps(
  props: TextTriggerButtonProps | IconButtonProps<'button'>,
): props is TextTriggerButtonProps {
  return 'title' in props;
}

export const MenuTriggerButton = React.forwardRef<
  HTMLElement,
  MenuTriggerButtonProps
>(function MenuTriggerButton(props, forwardedRef) {
  const menu = useMenuContext();
  const {
    refs,
    item,
    isNested,
    isOpen,
    hasFocusInside,
    setHasFocusInside,
    parent,
  } = menu;

  const parentActiveIndex = parent?.activeIndex;
  const getItemProps = parent ? parent.getItemProps : menu.getItemProps;

  const triggerProps = {
    ref: useMergeRefs([refs.setReference, item.ref, forwardedRef]),
    tabIndex: !isNested ? undefined : parentActiveIndex === item.index ? 0 : -1,
    role: isNested ? 'menuitem' : undefined,
    'data-open': isOpen ? '' : undefined,
    'data-nested': isNested ? '' : undefined,
    'data-focus-inside': hasFocusInside ? '' : undefined,
    ...menu.getReferenceProps(
      getItemProps({
        onClick: props.onClick,
        onMouseDown: props.onMouseDown,
        onKeyDown: props.onKeyDown,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onPointerDown: props.onPointerDown,
        onPointerEnter: props.onPointerEnter,
        onPointerLeave: props.onPointerLeave,
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          props.onFocus?.(event);
          setHasFocusInside(false);
          if (parent) parent.setHasFocusInside(true);
        },
      }),
    ),
  };

  if (isTextTriggerButtonProps(props)) {
    const { title, ...otherProps } = props;
    return (
      <Button {...otherProps} {...triggerProps}>
        {title}
      </Button>
    );
  }

  const { withTooltip, tooltipProps, ...otherProps } = props;

  const withTooltipProps = withTooltip
    ? {
        withTooltip,
        tooltipProps: { withTriggerWrapper: false, ...tooltipProps },
      }
    : undefined;

  return <IconButton {...otherProps} {...triggerProps} {...withTooltipProps} />;
});
