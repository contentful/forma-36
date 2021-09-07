import React, { useCallback, useState } from 'react';
import type { MouseEventHandler } from 'react';
import { Button } from '@contentful/f36-button';
import type { ButtonProps } from '@contentful/f36-button';
import { MoreHorizontalIcon } from '@contentful/f36-icons';
import { Menu } from '@contentful/f36-menu';

export type CardActionsProps = {
  buttonProps?: Partial<Omit<ButtonProps<'button'>, 'ref'>>;
  /**
   * Child elements to be rendered in the component
   */
  children: React.ReactNodeArray;
};

export const CardActions = ({
  buttonProps,
  children,
}: CardActionsProps): React.ReactElement => {
  const [isActionsDropdownOpen, setIsActionsDropdownOpen] = useState(false);

  const handleActionClick = useCallback<MouseEventHandler>(
    (event) => {
      event.preventDefault();
      setIsActionsDropdownOpen(!isActionsDropdownOpen);
    },
    [isActionsDropdownOpen, setIsActionsDropdownOpen],
  );

  return (
    <Menu
      isOpen={isActionsDropdownOpen}
      onOpen={() => {
        setIsActionsDropdownOpen(true);
      }}
      onClose={() => {
        setIsActionsDropdownOpen(false);
      }}
    >
      <Menu.Trigger>
        <Button
          aria-label="Actions"
          icon={<MoreHorizontalIcon />}
          {...buttonProps}
          onClick={handleActionClick}
          variant="transparent"
        />
      </Menu.Trigger>
      <Menu.List>{children}</Menu.List>
    </Menu>
  );
};
