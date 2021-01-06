import React, { useCallback, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';

import Dropdown from '../../Dropdown';
import DropdownList from '../../Dropdown/DropdownList';
import IconButton, { IconButtonProps } from '../../IconButton';

export interface CardActionsPropTypes {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * Props to pass down to the IconButton component
   */
  iconButtonProps?: Partial<IconButtonProps>;
  /**
   * A boolean used to disable the actions
   */
  isDisabled?: boolean;
  /**
   * The DropdownList elements used to render an actions dropdown for the component
   */
  children:
    | React.ReactElement<typeof DropdownList>
    | React.ReactElement<typeof DropdownList>[];
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
}

export function CardActions({
  className,
  children,
  testId = 'cf-ui-card-actions',
  iconButtonProps,
  isDisabled = false,
  ...otherProps
}: CardActionsPropTypes): React.ReactElement {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleClick = useCallback(
    (event: ReactMouseEvent) => {
      setIsDropdownOpen((prevState) => !prevState);

      if (iconButtonProps && iconButtonProps.onClick) {
        event.stopPropagation();
      }
    },
    [iconButtonProps],
  );

  return (
    <Dropdown
      onClose={() => {
        setIsDropdownOpen(false);
      }}
      position="bottom-right"
      className={className}
      isOpen={isDropdownOpen}
      testId={testId}
      toggleElement={
        <IconButton
          iconProps={{ icon: 'MoreHorizontal' }}
          buttonType="secondary"
          disabled={isDisabled}
          label="Actions"
          {...iconButtonProps}
          onClick={(event) => {
            event.preventDefault();
            handleClick(event);
          }}
        />
      }
      {...otherProps}
    >
      {React.Children.map(children, (listItems: React.ReactElement) => {
        return React.Children.map(listItems, (item: React.ReactElement) => {
          // React.Children behaves differently if the object is a Fragment.
          const resolvedChildren =
            item.type === React.Fragment ? item.props.children : item;

          const enhancedChildren = React.Children.map(
            resolvedChildren,
            (child: React.ReactElement) =>
              React.cloneElement(child, {
                onClick: (e: ReactMouseEvent) => {
                  if (child.props.onClick) {
                    child.props.onClick(e);
                  }
                  setIsDropdownOpen(false);
                  e.stopPropagation();
                },
              }),
          );

          return enhancedChildren;
        });
      })}
    </Dropdown>
  );
}

export default CardActions;
