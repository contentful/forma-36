import React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useMenuContext } from '../MenuContext';

export interface MenuTriggerProps {
  children: React.ReactElement;
}
export const MenuTrigger = React.forwardRef<HTMLElement, MenuTriggerProps>(
  function MenuTrigger({ children }, forwardedRef) {
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

    // Existing ref on the child (if any) so we can merge it.
    const childRef: React.Ref<HTMLElement> | undefined = (
      children as unknown as { ref?: React.Ref<HTMLElement> }
    ).ref;

    // Get children's existing props to merge event handlers
    const childProps = children.props as React.ComponentPropsWithRef<any>;

    const parentActiveIndex = parent?.activeIndex;
    const getItemProps = parent ? parent.getItemProps : menu.getItemProps;

    const triggerProps = {
      ref: useMergeRefs([refs.setReference, item.ref, forwardedRef, childRef]),
      tabIndex: !isNested
        ? undefined
        : parentActiveIndex === item.index
          ? 0
          : -1,
      role: isNested ? 'menuitem' : undefined,
      'data-open': isOpen ? '' : undefined,
      'data-nested': isNested ? '' : undefined,
      'data-focus-inside': hasFocusInside ? '' : undefined,
      ...menu.getReferenceProps(
        getItemProps({
          onClick: childProps.onClick,
          onMouseDown: childProps.onMouseDown,
          onKeyDown: childProps.onKeyDown,
          onMouseEnter: childProps.onMouseEnter,
          onMouseLeave: childProps.onMouseLeave,
          onPointerDown: childProps.onPointerDown,
          onPointerEnter: childProps.onPointerEnter,
          onPointerLeave: childProps.onPointerLeave,
          onFocus(event: React.FocusEvent<HTMLElement>) {
            childProps.onFocus?.(event);
            setHasFocusInside(false);
            if (parent) parent.setHasFocusInside(true);
          },
        }),
      ),
    };

    return React.cloneElement(children, triggerProps);
  },
);
