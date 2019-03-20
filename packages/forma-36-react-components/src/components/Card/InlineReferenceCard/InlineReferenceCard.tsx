import React, {
  Component,
  MouseEventHandler,
  MouseEvent as ReactMouseEvent,
} from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import IconButton from '../../IconButton';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownList from '../../Dropdown/DropdownList';
import DropdownListItem, {
  DropdownListItemProps,
} from '../../Dropdown/DropdownListItem/DropdownListItem';
import TabFocusTrap from '../../TabFocusTrap';
import Card from '../Card';

import InlineReferenceCardSkeleton from './InlineReferenceCardSkeleton';
const styles = require('./InlineReferenceCard.css');

export type InlineReferenceCardPropTypes = {
  /**
   * Gives the component a selected state
   */
  isSelected?: boolean;
  /**
   * The DropdownList elements used to render an actions dropdown for the component
   */
  dropdownListElements?: React.ReactElement;
  /**
   * Loading state for the component - when true will display loading feedback to the user
   */
  isLoading?: boolean;
  /**
   * The publish status of the referenced entity
   */
  status?: 'archived' | 'changed' | 'draft' | 'published';
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * Child nodes to be rendered in the component
   */
  children: React.ReactNode;
} & typeof defaultProps;

export interface InlineReferenceCardState {
  isDropdownOpen: boolean;
}

const defaultProps = {
  testId: 'cf-ui-inline-reference-card',
};

export class InlineReferenceCard extends Component<
  InlineReferenceCardPropTypes,
  InlineReferenceCardState
> {
  static defaultProps = defaultProps;

  state = {
    isDropdownOpen: false,
  };

  renderDropdownListElements = (dropdownListElements: React.ReactElement) => {
    return (
      <Dropdown
        onClose={() => {
          this.setState({
            isDropdownOpen: false,
          });
        }}
        position="bottom-right"
        className={styles.InlineReferenceCard__dropdown}
        isOpen={this.state.isDropdownOpen}
        toggleElement={
          <IconButton
            className={styles['InlineReferenceCard__icon-button']}
            iconProps={{ icon: 'MoreHorizontal' }}
            buttonType="secondary"
            label="Inline reference actions"
            onClick={() => {
              this.setState(state => ({
                isDropdownOpen: !state.isDropdownOpen,
              }));
            }}
          />
        }
      >
        {React.Children.map(dropdownListElements, listItems => {
          return React.Children.map(listItems, item => {
            // React.Children behaves differently if the object is a Fragment.
            const resolvedChildren =
              item.type === React.Fragment ? item.props.children : item;

            const enhancedChildren = React.Children.map(
              resolvedChildren,
              child =>
                React.cloneElement(child, {
                  onClick: (e: ReactMouseEvent) => {
                    if (child.props.onClick) {
                      child.props.onClick(e);
                    }
                    this.setState({ isDropdownOpen: false });
                  },
                }),
            );

            return enhancedChildren;
          });
        })}
      </Dropdown>
    );
  };

  render() {
    const {
      className,
      dropdownListElements,
      isSelected,
      children,
      testId,
      isLoading,
      status,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.InlineReferenceCard, className);

    const statusIndicatorClassNames = cn(
      styles['InlineReferenceCard__status-indicator'],
      {
        [styles[`InlineReferenceCard__status-indicator--${status}`]]:
          status && !isLoading,
      },
    );

    return (
      <Card
        selected={isSelected}
        className={classNames}
        {...otherProps}
        data-test-id={testId}
      >
        <CSSTransition
          timeout={100}
          in={isLoading}
          classNames={{
            enter: styles['InlineReferenceCard__spinner--enter'],
            enterActive: styles['InlineReferenceCard__spinner--enter-active'],
            exit: styles['InlineReferenceCard__spinner--exit'],
            exitActive: styles['InlineReferenceCard__spinner--exit-active'],
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className={styles['InlineReferenceCard__skeleton-wrapper']}>
            <InlineReferenceCardSkeleton />
          </div>
        </CSSTransition>
        <div className={statusIndicatorClassNames} />
        <span className={styles['InlineReferenceCard__text-wrapper']}>
          {isLoading ? 'Loading' : children}
        </span>
        {dropdownListElements &&
          this.renderDropdownListElements(dropdownListElements)}
      </Card>
    );
  }
}

export default InlineReferenceCard;
