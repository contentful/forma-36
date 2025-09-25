import React from 'react';
import type { ExpandProps } from '@contentful/f36-core';
import {
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useMergeRefs,
  offset,
  flip,
  shift,
  autoUpdate,
} from '@floating-ui/react';

export interface MenuTriggerProps {
  label: string;
  children: React.ReactNode;
}

export const MenuTrigger = (props: ExpandProps<MenuTriggerProps>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const parentId = useFloatingParentNodeId();
  const nodeId = useFloatingNodeId();
  const isNested = parentId != null;
  const item = useListItem();

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? 'right-start' : 'bottom-start',
    middleware: [
      offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  return (
    <button
      type="button"
      ref={useMergeRefs([refs.setReference, item.ref, forwardedRef])}
      tabIndex={
        !isNested ? undefined : parent.activeIndex === item.index ? 0 : -1
      }
      role={isNested ? 'menuitem' : undefined}
      data-open={isOpen ? '' : undefined}
      data-nested={isNested ? '' : undefined}
      data-focus-inside={hasFocusInside ? '' : undefined}
      className={isNested ? 'MenuItem' : 'RootMenu'}
      {...getReferenceProps(
        parent.getItemProps({
          ...props,
          onFocus(event: React.FocusEvent<HTMLButtonElement>) {
            props.onFocus?.(event);
            setHasFocusInside(false);
            parent.setHasFocusInside(true);
          },
        }),
      )}
    >
      {label}
      {isNested && (
        <span aria-hidden style={{ marginLeft: 10, fontSize: 10 }}>
          ▶
        </span>
      )}
    </button>
  );
};
