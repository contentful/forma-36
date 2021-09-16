import React, { Component, MouseEvent as ReactMouseEvent } from 'react';
import { MoreHorizontalIcon } from '@contentful/f36-icons';
import { css, cx } from 'emotion';
import { Dropdown, DropdownList, DropdownProps } from '../../Dropdown';
import { ButtonProps, Button } from '@contentful/f36-button';

export interface CardActionsProps extends DropdownProps {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * Props to pass down to the IconButton component
   */
  iconButtonProps?: Partial<ButtonProps<'button'>>;
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

export interface CardActionsState {
  isDropdownOpen: boolean;
}

const defaultProps: Partial<CardActionsProps> = {
  testId: 'cf-ui-card-actions',
  isDisabled: false,
};

export class CardActions extends Component<CardActionsProps, CardActionsState> {
  static defaultProps = defaultProps;

  state = { isDropdownOpen: false };

  handleClick = (event: ReactMouseEvent) => {
    this.setState((prevState) => ({
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
        className={css({ display: 'inline-flex' })}
        isOpen={this.state.isDropdownOpen}
        testId={testId}
        toggleElement={
          <Button
            variant="transparent"
            size="small"
            isDisabled={isDisabled}
            startIcon={<MoreHorizontalIcon aria-label="Actions" />}
            {...iconButtonProps}
            className={cx(
              css({
                paddingTop: 0,
                paddingBottom: 0,
                height: '20px',
                minHeight: '20px',
                border: 'none',
              }),
              className,
              iconButtonProps?.className,
            )}
            onClick={(event) => {
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
