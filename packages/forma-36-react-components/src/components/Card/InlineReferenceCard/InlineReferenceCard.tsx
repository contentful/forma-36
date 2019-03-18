import React, { Component } from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import IconButton from '../../IconButton';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownList from '../../Dropdown/DropdownList';
import Card from '../Card';

import InlineReferenceCardSkeleton from './InlineReferenceCardSkeleton';
const styles = require('./InlineReferenceCard.css');

export interface InlineReferenceCardPropTypes {
  isSelected?: boolean;
  dropdownListItemNodes?: React.ReactNode;
  isLoading?: boolean;
  status?: 'archived' | 'changed' | 'draft' | 'published';
  className?: string;
  testId?: string;
  children: React.ReactNode;
}

export interface InlineReferenceCardState {
  isDropdownOpen: boolean;
}

export class InlineReferenceCard extends Component<
  InlineReferenceCardPropTypes,
  InlineReferenceCardState
> {
  state = {
    isDropdownOpen: false,
  };

  render() {
    const {
      className,
      dropdownListItemNodes,
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
        {dropdownListItemNodes && (
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
            <DropdownList
              className={styles['InlineReferenceCard__dropdown-list']}
            >
              {dropdownListItemNodes}
            </DropdownList>
          </Dropdown>
        )}
      </Card>
    );
  }
}

export default InlineReferenceCard;
