import React from 'react';
import { IconButton } from '@contentful/f36-button';
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

  return (
    <Menu>
      <Menu.Trigger>
        <IconButton
          aria-label="Actions"
          icon={<MoreHorizontalIcon />}
          {...buttonProps}
          className={cx(styles.root, buttonProps?.className)}
          size="small"
          variant="transparent"
        />
      </Menu.Trigger>
      <Menu.List>{children}</Menu.List>
    </Menu>
  );
};
