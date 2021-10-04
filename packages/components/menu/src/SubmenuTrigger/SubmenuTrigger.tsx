import React, {
  useCallback,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
import { MenuTrigger } from '../MenuTrigger/MenuTrigger';
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem';

export type SubmenuTriggerProps = Omit<
  MenuItemProps<'button'>,
  'isInitiallyFocused' | 'as'
>;

const _SubmenuTrigger = (
  props: SubmenuTriggerProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const { onKeyDown, onMouseOver, onMouseLeave } = props;

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLButtonElement>>(
    (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        (event.target as HTMLElement).click();
      }

      onKeyDown?.(event);
    },
    [onKeyDown],
  );

  const handleMouseOver = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      (event.target as HTMLElement).click();

      onMouseOver?.(event);
    },
    [onMouseOver],
  );

  const handleMouseLeave = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      (event.target as HTMLElement).click();

      onMouseLeave?.(event);
    },
    [onMouseLeave],
  );

  return (
    <MenuTrigger>
      <MenuItem
        {...props}
        ref={ref}
        onKeyDown={handleKeyDown}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
    </MenuTrigger>
  );
};

export const SubmenuTrigger = React.forwardRef(_SubmenuTrigger);
