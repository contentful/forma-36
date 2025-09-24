import React from 'react';
import { IconButton, type ButtonProps } from '@contentful/f36-button';
import { DotsThreeIcon } from '@contentful/f36-icons';
//import { Menu } from '@contentful/f36-menu';
import { cx } from '@emotion/css';

import { getCardActionsStyles } from './CardActions.styles';

export type CardActionsProps = {
  buttonProps?: Partial<Omit<ButtonProps<'button'>, 'ref'>>;
  /**
   * Child elements to be rendered in the component
   */
  children: React.ReactNode[];
};

export const CardActions = ({
  buttonProps,
  children,
}: CardActionsProps): React.ReactElement => {
  const styles = getCardActionsStyles();

  return (
    <div>
      <IconButton
        aria-label="Actions"
        icon={<DotsThreeIcon />}
        {...buttonProps}
        className={cx(styles.root, buttonProps?.className)}
        size="small"
        variant="transparent"
        testId="cf-ui-card-actions"
      />
      <ul>{children}</ul>
    </div>
    // TODO: readd menu
    // <Menu>
    //   <Menu.Trigger>
    //     <IconButton
    //       aria-label="Actions"
    //       icon={<DotsThreeIcon />}
    //       {...buttonProps}
    //       className={cx(styles.root, buttonProps?.className)}
    //       size="small"
    //       variant="transparent"
    //       testId="cf-ui-card-actions"
    //     />
    //   </Menu.Trigger>
    //   <Menu.List>{children}</Menu.List>
    // </Menu>
  );
};

CardActions.displayName = 'CardActions';
