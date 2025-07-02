import React from 'react';
import { IconButton, type ButtonProps } from '@contentful/f36-button';
import { Menu } from '@contentful/f36-menu';
import { cx } from 'emotion';

import { getCardActionsStyles } from './CardActions.styles';

import { DotsThreeIcon } from '@contentful/f36-icons';

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
          icon={<DotsThreeIcon />}
          {...buttonProps}
          className={cx(styles.root, buttonProps?.className)}
          size="small"
          variant="transparent"
          testId="cf-ui-card-actions"
        />
      </Menu.Trigger>
      <Menu.List>{children}</Menu.List>
    </Menu>
  );
};
