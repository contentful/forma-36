import React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useMenuContext } from '../MenuContext';

export interface MenuTriggerProps {
  children: React.ReactElement;
  onFocus?: React.FocusEventHandler<HTMLElement>;
}
export const MenuTrigger = React.forwardRef<HTMLElement, MenuTriggerProps>(
  function MenuTrigger({ children, ...otherProps }, forwardedRef) {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childRef: React.Ref<HTMLElement> | undefined = (children as any).ref;

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
          ...otherProps,
          onFocus(event: React.FocusEvent<HTMLElement>) {
            (
              otherProps as { onFocus?: React.FocusEventHandler<HTMLElement> }
            ).onFocus?.(event);
            setHasFocusInside(false);
            if (parent) parent.setHasFocusInside(true);
          },
        }),
      ),
    };

    return React.cloneElement(children, triggerProps);
  },
);
