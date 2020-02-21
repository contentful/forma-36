import React, { Component, MouseEvent as ReactMouseEvent } from 'react';
import Dropdown from '../../Dropdown';
import DropdownList from '../../Dropdown/DropdownList';
import IconButton, { IconButtonProps } from '../../IconButton/IconButton';

export type CardActionsPropTypes = {
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
    | React.ReactElement<DropdownList>
    | React.ReactElement<DropdownList>[];
} & typeof defaultProps;

export interface CardActionsState {
  isDropdownOpen: boolean;
}

const defaultProps = {
  testId: 'cf-ui-card-actions',
  isDisabled: false,
};

export class CardActions extends Component<
  CardActionsPropTypes,
  CardActionsState
> {
  static defaultProps = defaultProps;

  state = { isDropdownOpen: false };

  handleClick = (event: ReactMouseEvent) => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));

    if (this.props.iconButtonProps && this.props.iconButtonProps.onClick) {
      event.stopPropagation();
    }
  };

  render() {
    const {
      className,
      children,
      testId,
      iconButtonProps,
      isDisabled,
      ...otherProps
    } = this.props;

    return (
      <Dropdown
        onClose={() => {
          this.setState({
            isDropdownOpen: false,
          });
        }}
        position="bottom-right"
        className={className}
        isOpen={this.state.isDropdownOpen}
        testId={testId}
        toggleElement={
          <IconButton
            iconProps={{ icon: 'MoreHorizontal' }}
            buttonType="secondary"
            disabled={isDisabled}
            label="Actions"
            {...iconButtonProps}
            onClick={event => {
              event.preventDefault();
              this.handleClick(event);
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
                    this.setState({ isDropdownOpen: false });
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
}

export default CardActions;
