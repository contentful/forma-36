import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import IconButton from '../../IconButton';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownList from '../../Dropdown/DropdownList';
import Card from '../Card';

import InlineReferenceCardSkeleton from './InlineReferenceCardSkeleton';
const styles = require('./InlineReferenceCard.css');

interface InlineReferenceCardPropTypes {
  extraClassNames?: string;
  children: React.ReactNode;
  isSelected?: boolean;
  dropdownListItemNodes?: React.ReactNode;
  isLoading?: boolean;
  testId?: string;
  status?: 'archived' | 'changed' | 'draft' | 'published';
}

interface InlineReferenceCardState {
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
      extraClassNames,
      dropdownListItemNodes,
      isSelected,
      children,
      testId,
      isLoading,
      status,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.InlineReferenceCard, extraClassNames);

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
        extraClassNames={classNames}
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
            extraClassNames={styles.InlineReferenceCard__dropdown}
            isOpen={this.state.isDropdownOpen}
            toggleElement={
              <IconButton
                extraClassNames={styles['InlineReferenceCard__icon-button']}
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
              extraClassNames={styles['InlineReferenceCard__dropdown-list']}
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
