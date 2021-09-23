import React, { useCallback, useState } from 'react';
import type { MouseEventHandler } from 'react';
import { Button } from '@contentful/f36-button';
import type { ButtonProps } from '@contentful/f36-button';
import { MoreHorizontalIcon } from '@contentful/f36-icons';
import { Menu } from '@contentful/f36-menu';
import { cx } from 'emotion';

import { getCardActionsStyles } from './CardActions.styles';

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
  const styles = getCardActionsStyles();
  const [isOpen, setIsOpen] = useState(false);

  const handleActionClick = useCallback<MouseEventHandler>(
    (event) => {
      event.preventDefault();
      setIsOpen(!isOpen);
    },
    [isOpen, setIsOpen],
  );

  return (
    <Menu
      isOpen={isOpen}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Menu.Trigger>
        <Button
          aria-label="Actions"
          startIcon={<MoreHorizontalIcon />}
          {...buttonProps}
          className={
            buttonProps ? cx(styles.root, buttonProps.className) : styles.root
          }
          onClick={handleActionClick}
          variant="transparent"
        />
      </Menu.Trigger>
      <Menu.List>{children}</Menu.List>
    </Menu>
  );
};
