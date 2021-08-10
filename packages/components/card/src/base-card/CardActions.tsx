import React, { useCallback, useState } from 'react';
import type { MouseEventHandler, ReactElement } from 'react';
import { Button } from '@contentful/f36-button';
import type { ButtonProps } from '@contentful/f36-button';
import { MoreHorizontal } from '@contentful/f36-icons';
import { Dropdown } from '@contentful/f36-components';

export type CardActionsProps = {
  buttonProps?: Partial<Omit<ButtonProps<'button'>, 'ref'>>;
  /**
   * Child elements to be rendered in the component
   */
  children: ReactElement | ReactElement[];
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
    <Dropdown
      isOpen={isActionsDropdownOpen}
      onClose={() => {
        setIsActionsDropdownOpen(false);
      }}
      position="bottom-right"
      toggleElement={
        <Button
          aria-label="Actions"
          icon={<MoreHorizontal />}
          {...buttonProps}
          onClick={handleActionClick}
          variant="transparent"
        />
      }
      usePortal={false}
    >
      {React.Children.map(children, (listItems: ReactElement) => {
        return React.Children.map(listItems, (item: ReactElement) => {
          const resolvedChildren =
            item.type === React.Fragment ? item.props.children : item;

          const enhancedChildren = React.Children.map(
            resolvedChildren,
            (child: ReactElement) =>
              React.cloneElement(child, {
                onClick: (event: MouseEvent) => {
                  if (child.props.onClick) {
                    child.props.onClick(event);
                  }
                  setIsActionsDropdownOpen(false);
                  event.stopPropagation();
                },
              }),
          );

          return enhancedChildren;
        });
      })}
    </Dropdown>
  );
};
